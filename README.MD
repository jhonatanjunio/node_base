
# NodeJS / TypeScript base project 🚀

This is a base/pattern project used by me, in order to develop any project in TypeScript & NodeJS. This project contains only the folders structure and a basic model and a **Users CRUD**.

## Technologies used

NodeJs (<https://nodejs.org/en/>) \
NPX (<https://github.com/npm/npx#readme>) \
TypeScript (<https://www.typescriptlang.org/>) \
Prisma JS (<https://www.prisma.io/>) \
Cors (<https://github.com/expressjs/cors#readme>) \
ExpressJs (<https://expressjs.com/>) \
MorganJS (<https://github.com/expressjs/morgan#readme>) \

## Project initialization

First of all, you need set your environment variables at _.env.example_ following the instructions contained at commented lines there, then save the file removing the _.example_ from the file name. After that you can run the following command:

```javascript
npm install
```

## How to add more Models to my application?

You just need to add a new block of code accondingly to the User model at `./prisma/schema.prisma`. After that you would need to migrate your tables, using the following command:

```javascript
npx prisma migrate dev --name init
```

## 🔥 Run the Project 🔥

Now you're ready to go! You just need to:

```javascript
npm run dev
```

and boom! Application running! Good luck at your development. Once you have finished the development, you can now build you application for production. Just run

```javascript
npm run start
```

and now you have your release code at `./build` folder. 🎉

---


## Useful links

Prisma - Queries documentation -> <https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#model-queries>\
Deploying your application using Heroku -> <https://www.heroku.com/nodejs>

---

## Contributors

> Jhonatan Junio ([GitHub](https://github.com/jhonatanjunio))\
> Arthur Mendes ([GitHub](https://github.com/Thumendes))