# Utilizar imagen de node versión 10 y se va a llamar build-step
FROM node:14-alpine as build-step

# Crear carpeta llamada app
RUN mkdir -p /app

# Asignar a la carpeta creada
WORKDIR /app

# Copiar dependencias de package.json en la carpeta app
COPY package.json /app

# Instalar las dependencias
RUN npm install

# Copiar lo que se encuentre en la ruta actual a carpeta app
COPY . /app

# Crear compilado para producción
RUN npm run build --prod

# Utilizar imagen de nginx version 1.17.1 alpine
FROM nginx:1.17.1-alpine

# Copiar en la imagen node a la imagen nginx
COPY --from=build-step /app/www /usr/share/nginx/html