# Use a base image with Node.js installed
FROM node:alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend files into the container
COPY . .

# Build the frontend (if necessary, replace 'npm run build' with the actual build command of your frontend project)
RUN node datatree.js