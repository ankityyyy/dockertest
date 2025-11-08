# ---------- Stage 1: Build React App ----------
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Create production build
RUN npm run build


# ---------- Stage 2: Nginx Server ----------
FROM nginx:alpine AS runner

# Copy React build from builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
