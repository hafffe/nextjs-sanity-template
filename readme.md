### Next.js & Sanity Template

Static site template built with [Next.js](https://github.com/zeit/next.js) and [Sanity](https://sanity.io)

<details>
<summary>Setup</summary>

### Preparations
1. Create an account at [Vercel](https://vercel.com/docs)
2. Install `vercel` globally with `npm install -g vercel`
3. login on `vercel` with your terminal
4. Create an account at [Sanity](https://sanity.io)
5. Install `sanity` globally with `npm install -g sanity`
6. Login on `sanity` with your terminal

### Initial Setup Next JS
1. Add the variables from `env.example` for each environment in vercel dashboard
3. Run `vercel env pull <filename>` to create a local enviroment file or manually create files for `.env.development.local` & `.env.production.local` with correct values

### Initial Setup Sanity
1. Rename `.env.production.example` & `.env.development.example` to `.env.production` & `.env.development`
2. Change environment variables in each file
3. Create two datasets, one named `production` and the other `staging`.
   `staging` is used with `npm run dev` to make sure not break production data
4. Deploy the schema to either staging dataset or production dataset with `npm run graphql-deploy:<dataset>`
</details>



#### Features
- Preview
- Written in typescript & types generated with codegen
- Usage of webp when supported
