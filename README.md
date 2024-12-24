# Welcome to Flights Service

## Project Setup
- clone the project on your local
- Execute `npm install` on the samepath as your local directory downded project.
- Create a `.env` file in the root directory and add the following variable.
   - `PORT=3000`
- Inside the `src/config` folder create a new file `config.json` the following piece of json.


```
{
  "development": {
    "username": "<Your_DB_LOGIN_NAME>",
    "password": "<Your_DB_Password>",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```

- Once you have added your db config as listed above, go to the source folder in your terminal and execute `npx sequelize db:create ` 
```
