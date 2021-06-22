# Explain

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
docker run -v $(pwd):/app -p 4000:3000 -d --name node-app node-app-image
```

* -v : persistent data with path/to/folder/on/location:path/to/folder/on/container 
  * If add `:ro` at end of path/to/folder/on/container. It's could be say 
* -p : for port external port from internal container port
* -d : Detach mode
* --name : for named container
* last parameter, it's image

## Get into the container
```Bash
docker exec -it node-app bash
```
