# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app/frontend

# Copy the package.json and yarn.lock files to the container
COPY frontend/package*.json ./

COPY frontend/yarn.lock ./

# Install Node.js dependencies using Yarn
RUN yarn install

# Copy the rest of the application code to the container
COPY frontend/ ./

# Expose the port that the React.js app will run on (if needed)
EXPOSE 3000

# Define the command to start the React development server
CMD ["yarn", "start"]
