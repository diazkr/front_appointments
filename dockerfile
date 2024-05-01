# Usa una imagen base de Node.js
FROM node:21-alpine

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia los archivos necesarios (package.json, tsconfig.json, src)
COPY package*.json vite.config.js /app/
COPY . .
# Instala las dependencias
RUN npm install --legacy-peer-deps

# Expone el puerto en el que el servidor Express escucha
EXPOSE 5174

# Define el comando para compilar el código TypeScript y luego iniciar el servidor
CMD ["npm","run", "dev"]