
# FROM node:20-alpine3.22 AS builder

# WORKDIR /build
# COPY package*.json ./
# RUN npm install
# COPY . .



# FROM gcr.io/distroless/nodejs20 AS runner

# WORKDIR /app

# COPY --from=builder /build/package*.json ./


# RUN npm ci --only=production
# RUN adduser -D appuserankit
# RUN mkdir -p /app/uploads /app/logs /app/temp
# RUN chown -R appuserankit:appuserankit /app
# USER appuserankit


# HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
#   CMD wget -qO- http://localhost:5000/docker || exit 1

# ENV NODE_ENV=production


# COPY --from=builder /build ./ 

# EXPOSE 5000

# CMD ["node", "index.js"]


