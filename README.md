# ☁️ Weatherly Backend – NestJS API

## Description

Este es el backend de la aplicación **Weatherly**, desarrollado con [NestJS](https://nestjs.com).  
Proporciona una API REST para consultar, almacenar y recuperar búsquedas del clima utilizando la API de OpenWeatherMap.  
Incluye conexión a base de datos, validación de datos, y documentación Swagger para facilitar su uso e integración.

---

## 🚀 Technologies

- **NestJS** (Node.js Framework)
- **TypeScript**
- **MongoDB** o **PostgreSQL** (según configuración)
- **Swagger** (Documentación API)
- **Docker** (para contenedorización)

---

## 🛠️ Project Setup

npm install

---

## ▶️ Running the App

# development

npm run start:dev

# production

npm run start:prod

---

## 🧪 Testing

# unit tests

npm run test

# e2e tests

npm run test:e2e

# coverage

npm run test:cov

---

## 📦 API Documentation

Swagger está disponible en:  
👉 http://localhost:4000/api

---

## 🐳 Docker

docker build -t weatherly-backend .  
docker run -p 4000:4000 weatherly-backend

---

## 📁 Project Structure

src/  
├── weather/ # Módulo principal del clima  
│ ├── weather.controller.ts  
│ ├── weather.service.ts  
│ └── weather.module.ts  
├── common/ # DTOs, pipes, helpers  
├── app.module.ts  
└── main.ts

---

## 📬 Author

- Stefano Falconi
- GitHub: https://github.com/mushroomsoft-it

---

## 📄 License

MIT
