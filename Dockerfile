# Use the official Node.js image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy all files from the current directory to the working directory
COPY . .

# Build the Vue app
RUN npm run build

# Expose the container's port 3000
EXPOSE 3000

# Define the command to run the app when the container starts
CMD ["npm", "run", "serve"]

