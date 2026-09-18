# Base image uses alpine to make the image a few MB and not hyndreds 0f MB
FROM node:20-alpine

#working directory inside the container
WORKDIR /app/

# Install dependencies first
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

# Environment port
ENV PORT=3000

CMD ["node", "server.js"]