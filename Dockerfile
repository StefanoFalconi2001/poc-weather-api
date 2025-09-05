# Etapa 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copiamos solo los package.json para instalar dependencias
COPY package*.json ./

# Instalamos todas las dependencias (dev + prod)
RUN npm install

# Copiamos el resto del código
COPY . .

# Construimos la app
RUN npm run build

# Etapa 2: Producción
FROM node:20-alpine AS production

WORKDIR /app

# Copiamos solo las dependencias de producción
COPY package*.json ./
RUN npm install --production

# Copiamos la carpeta dist desde la etapa builder
COPY --from=builder /app/dist ./dist

# Exponemos el puerto
EXPOSE 3000

# Comando para iniciar la app en producción
CMD ["node", "dist/main"]
