# Use a lightweight Node.js image
FROM node:20-alpine

# Create working directory
WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project
COPY . .

# Build the NestJS project
RUN npm run build

# Expose the API port
EXPOSE 3000

# Command to start the app
CMD ["node", "dist/main"]
