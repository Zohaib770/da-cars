const winston = require('winston');
const path = require('path');
const fs = require('fs');

// Log-Verzeichnis erstellen
const logDir = 'logs';
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
}

// Farben für die Console
const colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    debug: 'white'
};

winston.addColors(colors);

// Log-Format
const format = winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.errors({ stack: true }),
    winston.format.printf(({ timestamp, level, message, ...meta }) => {
        let log = `${timestamp} [${level.toUpperCase()}] ${message}`;
        
        if (Object.keys(meta).length > 0) {
            // Stack-Trace anzeigen
            if (meta.stack) {
                log += `\n${meta.stack}`;
            }
            // Meta-Daten anzeigen (außer stack)
            const metaWithoutStack = { ...meta };
            delete metaWithoutStack.stack;
            if (Object.keys(metaWithoutStack).length > 0) {
                log += `\n${JSON.stringify(metaWithoutStack, null, 2)}`;
            }
        }
        
        return log;
    })
);

// Console Format (mit Farben)
const consoleFormat = winston.format.combine(
    winston.format.colorize({ all: true }),
    winston.format.timestamp({ format: 'HH:mm:ss' }),
    winston.format.printf(({ timestamp, level, message }) => {
        return `[${timestamp}] ${level}: ${message}`;
    })
);

// Logger erstellen
const logger = winston.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    format: format,
    transports: [
        // Console Transport
        new winston.transports.Console({
            format: consoleFormat
        }),
        
        // Error Log File
        new winston.transports.File({
            filename: path.join(logDir, 'error.log'),
            level: 'error',
            maxsize: 5242880, // 5MB
            maxFiles: 5
        }),
        
        // Combined Log File
        new winston.transports.File({
            filename: path.join(logDir, 'combined.log'),
            maxsize: 5242880, // 5MB
            maxFiles: 5
        }),
        
        // HTTP Log File
        new winston.transports.File({
            filename: path.join(logDir, 'http.log'),
            level: 'http',
            maxsize: 5242880,
            maxFiles: 3
        })
    ]
});

// HTTP Request Logger Middleware
const httpLogger = winston.createLogger({
    level: 'http',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.File({
            filename: path.join(logDir, 'http.log')
        })
    ]
});

// Erweiterte Log-Methoden
logger.request = (req, res, next) => {
    const start = Date.now();
    
    res.on('finish', () => {
        const duration = Date.now() - start;
        const logMessage = `${req.method} ${req.originalUrl} ${res.statusCode} ${duration}ms`;
        
        if (res.statusCode >= 400) {
            httpLogger.error(logMessage, {
                ip: req.ip,
                userAgent: req.get('user-agent'),
                params: req.params,
                query: req.query,
                body: req.method !== 'GET' ? req.body : undefined
            });
        } else {
            httpLogger.http(logMessage, {
                ip: req.ip,
                userAgent: req.get('user-agent')
            });
        }
    });
    
    next();
};

// Express spezifischer Middleware-Logger
logger.expressMiddleware = (req, res, next) => {
    logger.http(`→ ${req.method} ${req.originalUrl}`, {
        ip: req.ip,
        userAgent: req.headers['user-agent'],
        query: Object.keys(req.query).length > 0 ? req.query : undefined,
        params: Object.keys(req.params).length > 0 ? req.params : undefined
    });
    
    if (req.method !== 'GET' && req.body && Object.keys(req.body).length > 0) {
        logger.debug('Request Body:', req.body);
    }
    
    next();
};

// Datenbank Logger
logger.db = {
    query: (query, parameters, duration) => {
        logger.debug(`DB Query: ${query}`, {
            parameters: parameters,
            duration: `${duration}ms`
        });
    },
    
    connection: (message) => {
        logger.info(`DB: ${message}`);
    },
    
    error: (error, query = '') => {
        logger.error(`DB Error: ${error.message}`, {
            query: query,
            stack: error.stack
        });
    }
};

// Performance Logger
logger.perf = (operation, startTime, metadata = {}) => {
    const duration = Date.now() - startTime;
    const level = duration > 1000 ? 'warn' : duration > 500 ? 'info' : 'debug';
    
    logger.log(level, `Performance: ${operation} took ${duration}ms`, {
        operation,
        duration,
        ...metadata
    });
    
    return duration;
};

// Vereinfachte Helper
logger.success = (message, meta = {}) => {
    logger.info(`✅ ${message}`, meta);
};

logger.fail = (message, error = null, meta = {}) => {
    if (error) {
        meta.error = error.message;
        meta.stack = error.stack;
    }
    logger.error(`❌ ${message}`, meta);
};

logger.warning = (message, meta = {}) => {
    logger.warn(`⚠️ ${message}`, meta);
};

logger.api = {
    request: (endpoint, method, data = {}) => {
        logger.info(`API ${method.toUpperCase()} ${endpoint}`, data);
    },
    
    response: (endpoint, method, status, data = {}) => {
        const level = status >= 400 ? 'error' : status >= 300 ? 'warn' : 'info';
        logger.log(level, `API ${method.toUpperCase()} ${endpoint} → ${status}`, data);
    },
    
    error: (endpoint, method, error) => {
        logger.error(`API ${method.toUpperCase()} ${endpoint} failed`, {
            message: error.message,
            stack: error.stack
        });
    }
};

// Start-Log
logger.info('Logger initialisiert', {
    logLevel: logger.level,
    logFiles: ['error.log', 'combined.log', 'http.log'],
    logDirectory: path.resolve(logDir)
});

module.exports = logger;