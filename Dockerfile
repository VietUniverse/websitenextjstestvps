# Step 1: Use Node.js 22 for the build stage
FROM node:22 AS builder

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Step 4: Install dependencies
RUN yarn install --frozen-lockfile

# Step 5: Copy application source code
COPY . .

# Step 6: Build the Next.js app
RUN yarn build

# Step 7: Use a smaller image for production
FROM node:22-slim

# Step 8: Set working directory
WORKDIR /app

# Step 9: Copy only the built app and necessary files from builder
COPY --from=builder /app ./

# Step 10: Expose port
EXPOSE 3000

# Step 11: Start the app
CMD ["yarn", "start"]
