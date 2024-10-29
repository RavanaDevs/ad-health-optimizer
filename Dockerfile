# Stage 1: Build the Next.js application
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Stage 2: Serve the built application
FROM node:18-alpine AS runner

# Set NODE_ENV to production for optimized performance
ENV NODE_ENV=production

# Set the working directory
WORKDIR /app

# Copy the build files from the builder stage
COPY --from=builder /app ./

# Expose the port Next.js will run on
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]
