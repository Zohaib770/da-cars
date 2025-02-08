# Basis-Image
FROM openjdk:17-jdk-slim

# Arbeitsverzeichnis erstellen
WORKDIR /app

# Abhängigkeiten hinzufügen
COPY target/dacar-backend.jar app.jar

# Konfigurationsdateien kopieren
#COPY target/classes/application.properties config/

# Port freigeben
EXPOSE 8080

# Start der Anwendung
ENTRYPOINT ["java", "-jar", "app.jar"]
