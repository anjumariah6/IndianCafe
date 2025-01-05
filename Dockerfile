# Fetching the latest node image on alpine linux
FROM node:alpine3.10

# Setting up the work directory
WORKDIR /app/

# Copy package.json and package-lock.json
COPY package*.json ./

# Copying all the files in our project
COPY . .

RUN npm install

# Expose the port your app runs on
EXPOSE 3000

# Starting our application
CMD ["npm","start"]
