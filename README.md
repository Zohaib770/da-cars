# Da Car Projekt

wie wird das backend mit docker gestartet

als erstes imag bauen
```
docker build -t dacar-backend .
````

dann container starten
```
docker run --name dacar-container -p 8080:8080 dacar-backend
```