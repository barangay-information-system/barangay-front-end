# #stage 1
FROM node:20.0.0-alpine As development
WORKDIR /app
COPY package*.json ./

RUN npm install npm@latest
RUN npm install --save-dev esbuild
RUN npm install --force --no-optional --engine-strict=false
COPY . .
RUN npm run build

# #stage 2
FROM nginx:alpine
COPY --from=development /app/dist/barangay_sys /usr/share/nginx/html
