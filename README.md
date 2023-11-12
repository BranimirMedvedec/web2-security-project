# Security project web app for an Advanced Web Development course at University of Zagreb Faculty of Electrical Engineering and Computing

Web app is depoloyed on vercel.

Database service is from PostgreSQL by Render.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Clone the repo, and run command:

```
npm install
```

to install all the necessary dependencies.

Then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## About web app

### Authentication

Auth0 is implemented for safe authentication.

In case of bad authentication, MOCK/DUMMY auth is used.

After user logs/signs in, it sets the session to local session storage with email and UNHASHED password, which is prone to session theft.
And user info is saved to the database without hashing the password.

Logout doesn't remove the session (there is a clear session button just for that purpose which deletes session from local session storage).

If user types in email that is already used by other user, it returns bad error "User with that email already exists".

### SQL Injection

Testing SQL: it queries the database table "Pets" by a few attributes and value of selected attribute, returns pets that match the value and attribute if query successful.

Safe SQL testing prevents tautology by sanitizing the query (converting it to string by using built in postgres pooling way of querying). Gives error if trying to inject malicious sql query.

Unsafe query doesn't sanitize the input and is liable to SQL Injection Attack. Button "Test SQL Injection" sets the input to a malicious query that will return the data of table "Users" from database.

### Database options

Page with a few options for database (Drop Tables, Populate Database, Print Database).

Print database to see the structure of database for SQL Injection Testing.
