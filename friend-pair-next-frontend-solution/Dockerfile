# Use the official Node.js 14 image as base
FROM node:14

# Set working directory in the container
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the app port
EXPOSE 3002

# Start the Next.js app
CMD ["npm", "start"]
