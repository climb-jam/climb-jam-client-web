# ClimbJAM – Documentation de déploiement

## 📌 Présentation du projet

**ClimbJAM** est une application web et mobile dédiée à l'escalade.

* **Période de développement** : du **18 août 2025** au **27 septembre 2025**
* **Développeur** : Web & Mobile
* **Frontend** : React + TypeScript (Vite)
* **Backend** : Java Spring Boot (API REST sécurisée JWT)
* **Base de données** : MySQL

---

## 🧱 Architecture globale

```
climb-jam/
│
├── climb-jam-api/        # Backend Spring Boot
│   ├── src/main/java
│   ├── src/main/resources
│   └── pom.xml
│
├── climb-jam-client-web/ # Frontend React TypeScript
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md
```

---

## ⚙️ Prérequis

### Outils nécessaires

* **Java JDK 21**
* **Maven 3.9+**
* **Node.js 20+**
* **npm 10+**
* **MySQL 8+**
* (Optionnel) **Docker & Docker Compose**

---

## 🔐 Variables d’environnement

Le backend utilise `spring-dotenv` pour charger les variables depuis un fichier `.env`.

### 📄 Exemple `.env`

```env
DB_HOST=localhost
DB_PORT=3306
DB_NAME=climbjam
DB_USERNAME=climbjam_user
DB_PASSWORD=secret

JWT_SECRET=verySecretJwtKeyWithAtLeast256Bits
JWT_EXPIRATION=86400000

SERVER_PORT=8080
```

⚠️ **Ne jamais versionner le fichier `.env`**

---

## 🗄️ Base de données MySQL

### Création de la base

```sql
CREATE DATABASE climbjam CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'climbjam_user'@'%' IDENTIFIED BY 'secret';
GRANT ALL PRIVILEGES ON climbjam.* TO 'climbjam_user'@'%';
FLUSH PRIVILEGES;
```

---

## 🚀 Déploiement Backend (Spring Boot)

### 1️⃣ Configuration `application.yml`

```yaml
spring:
  datasource:
    url: jdbc:mysql://${DB_HOST}:${DB_PORT}/${DB_NAME}
    username: ${DB_USERNAME}
    password: ${DB_PASSWORD}
  jpa:
    hibernate:
      ddl-auto: update
    show-sql: false
    open-in-view: false

server:
  port: ${SERVER_PORT:8080}
```

---

### 2️⃣ Lancement en local

```bash
cd climb-jam-api
mvn clean spring-boot:run
```

API disponible sur :

```
http://localhost:8080
```

---

### 3️⃣ Build de production

```bash
mvn clean package
```

```bash
java -jar target/climb-jam-api-0.0.1-SNAPSHOT.jar
```

---

### 4️⃣ Documentation API (Swagger)

Une fois l'application lancée :

```
http://localhost:8080/swagger-ui.html
```

---

## 🔑 Sécurité

* Authentification **JWT** (JSON Web Token)
* Spring Security
* Endpoints sécurisés par rôles

Flux typique :

1. Login
2. Génération du JWT
3. Transmission via header `Authorization: Bearer <token>`

---

## 🎨 Déploiement Frontend (React + Vite)

### 1️⃣ Installation des dépendances

```bash
cd climb-jam-client-web
npm install
```

---

### 2️⃣ Variables d’environnement Frontend

📄 `.env`

```env
VITE_API_URL=http://localhost:8080/api
```

---

### 3️⃣ Lancement en développement

```bash
npm run dev
```

Application accessible sur :

```
http://localhost:5173
```

---

### 4️⃣ Build de production

```bash
npm run build
```

Les fichiers statiques sont générés dans :

```
dist/
```

---

## 🌍 Déploiement en production (exemple)

### Option 1 : Backend + Frontend séparés

* **Backend** : VPS / Cloud (Java 21)
* **Frontend** :

  * Nginx
  * Netlify
  * Vercel

Nginx (extrait) :

```nginx
location /api {
  proxy_pass http://localhost:8080;
}
```

---

### Option 2 : Docker (recommandé)

* Conteneur Spring Boot
* Conteneur MySQL
* Frontend servi via Nginx

*(docker-compose à prévoir si nécessaire)*

---

## 🧪 Tests

### Backend

```bash
mvn test
```

### Frontend

```bash
npm run lint
```

---

## 📦 Technologies utilisées

### Backend

* Spring Boot 3.5.5
* Spring Security
* Spring Data JPA
* MySQL
* JWT (jjwt)
* Lombok
* OpenAPI / Swagger

### Frontend

* React 19
* TypeScript
* Vite
* Material UI (MUI)
* Axios
* React Router
* Chart.js
* Leaflet

---

## 📄 Licence

Projet pédagogique – usage éducatif.

---

## ✍️ Auteur

**Développeur Web & Mobile**
Mariam NZEYIMANA,Jason PERRAULT, Alexandre DELSOL
Projet ClimbJAM – 2025
