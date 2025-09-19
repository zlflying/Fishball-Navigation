FROM node:20-alpine as build-stage

WORKDIR /app
RUN corepack enable

COPY .npmrc package.json pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm-store,target=/root/.pnpm-store \
    pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

# SSR
FROM node:20-alpine as production-stage

WORKDIR /app

# Install PM2 globally
RUN npm install -g pm2

# Copy built files from build stage
COPY --from=build-stage /app/.output ./.output

# Copy PM2 configuration file
COPY ecosystem.config.cjs .

EXPOSE 3001

# Use PM2 to start the application
CMD ["pm2-runtime", "start", "ecosystem.config.cjs"]
