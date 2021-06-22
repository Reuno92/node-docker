# Install

## Container
Docker file contains
```Docker
# VERSION OF NODE
FROM node:15
# Directory where app is placed 
WORKDIR /app
# Install depencies first 
COPY package.json .
RUN npm install
# Install all files application after
COPY . ./
# EXPOSE PORT
EXPOSE 3000
# Run command only image was build.
CMD ["node", "index.js"]
```

## Build Image with name node-app-image
```Bash
docker build -t node-app-image .
```

## Run Container with name node-app with previous image
```Bash
docker run -p 4000:3000 -d --name node-app node-app-image
```

## Get into the container
```Bash
docker exec -it node-app bash
```
