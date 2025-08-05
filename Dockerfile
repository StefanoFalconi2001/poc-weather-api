# Use a lightweight Node.js image
FROM node:20-alpine

# Create working directory
WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project (including .env)
COPY . .

# Build the NestJS project
RUN npm run build

# Expose the API port
EXPOSE 4000

# Optional: you can use this if not specifying the command in docker-compose.yml
CMD ["npm", "run", "start:prod"]
