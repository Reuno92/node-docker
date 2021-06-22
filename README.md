# Explanations

## Image
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

### Build Image with name node-app-image
```Bash
docker build -t node-app-image .
```

## Container

### Run Container with name node-app with previous image
```Bash
docker run -v $(pwd):/app -v /app/node_modules --env-file ./.env -p 3000:4000  -d --name node-app node-app-image
```

* -v     : persistent data with path/to/folder/on/location:path/to/folder/on/container 
    * If add `:ro` at end of path/to/folder/on/container. It means `Read-Only`.
    * If add this sample `-v /app/node_modules` for create a gateway in development.
* --env  : Add environment variable in dockerfile.
    * If `--env-file` it find environment variables in file by convention `.env` (by absolute path).
* -p     : for port external port from internal container port.
* -d     : Detach mode.
* --name : for named container.
* last parameter, it's image.

## Get into the container
```Bash
docker exec -it node-app bash
```

## Docker Volume

### List of Volume
```Bash
docker volume ls
```

### Delete volume
```Bash
docker volume <VOLUME_NAME>
```

### Delete unused volume
```Bash
docker volume prune
```

## Docker compose

### Docker-compose.yml
```YAML
version: "3"
services:
  #Name of service
  node-app:
    # find Dockerfile
    build: .
    ports: 
      - "3000:6000"
    volumes:
      - ./:/app
      - /app/node_modules
    environment:
      # Ports "3000:XXXX" <> PORT=XXXX and don't forget change in Dockerfile EXPOSE XXXX or ENV PORT
      # Ports "1000:3000" in web browser type localhost:1000, if "2000:3000" type localhost: 2000   
      - PORT=6000
    # env_file:
    #  - ./.env
```

### Launch docker-compose
```
docker-compose up
```
You could add:
* `-d` for detach mode.
* `--build` for rebuild any changes in docker-compose and DockerFile

```
docker-compose down
```
You could add:
* `-v` for delete volume in same time.


### 
