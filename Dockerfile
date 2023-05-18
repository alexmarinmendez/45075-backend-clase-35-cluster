# Definimos una imagen base
FROM node

# Creamos una carpeta donde vamos a guardar el proyecto
WORKDIR /app

# Copiar los packages de nuestra carpeta local a la carpeta de trabajo
COPY package*.json ./

# Ejecutamos el comando para instalar dependencias
RUN npm install

# Copiamos el código fuente del app
COPY . .

# Habilitamos un puerto que escuche nuestra aplicación
EXPOSE 8080

CMD ["npm", "start"]


