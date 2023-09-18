# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app/backend

# Copy the package.json and package-lock.json to the container
COPY backend/package*.json ./

COPY backend/yarn.lock ./


# Install Node.js dependencies
RUN yarn

# Copy the rest of the application code to the container
COPY backend/ ./

# Expose the port that the Express.js app will run on
EXPOSE 3333

# Define the command to start the Express.js server
CMD ["yarn", "start"]
