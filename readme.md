# NEXT.JS - SANITY TEMPLATE

> Template for blog / marketing site built next.js & sanity.io

This starter template built upon [Next.js](https://nextjs.org/) 13 with the new app directory & router.
[Sanity](https://sanity.io/) is used for content handling,
and [Tailwind](https://tailwindcss.com/) is used for styling.

### Setup Vercel

Import the project in vercel
Setup following environment variables (as plain text variables)

`NEXT_PUBLIC_SANITY_PROJECT_ID` with value for your prefered dataset
`NEXT_PUBLIC_SANITY_DATASET` with your sanity project id

### Setup for local development

Create `.env` file in root path with the environment variables

```
# For Next Locally
NEXT_PUBLIC_SANITY_PROJECT_ID = "abcd1245"
NEXT_PUBLIC_SANITY_DATASET = "production"
```

### Development

To Start development server:

```
npm run dev
```

This will run frontend at localhost:3000
and you will find sanity studio at localhost:3000/studio

Add http://localhost:3000 in sanity settings -> api - CORS Origins

### Things to know

* Frontend startpage is fetched with slug `frontpage`
* Posts list is fetched with the slug `posts`

### Tech Stack

- [Next.js](https://nextjs.org/)
- [Sanity](https://sanity.io/)
- [next-sanity](https://github.com/sanity-io/next-sanity)
- [Tailwind](https://tailwindcss.com/)
