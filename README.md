# a-star-tuiton-server

### Overview

This project is using PostgreSQL, Express, and Node v.12

### Debug

Make sure you have PostgreSQL database and node v.12 or later version, and sequelize-cli install in your computer.

### Run it locally

```
# how to run locally
# at the root project directory
$ npm install

# make sure you change to your credential at config/config.json
$ sequelize db:create
$ sequelize db:migrate

# create a .env file
$ touch .env
$ echo "JWT_SECRET=$(input_your_value_here)"

# the project is default to serve at http://localhost:3000
```
