# NEXT.JS - SANITY TEMPLATE

- Uses Chakra as component library
- next-sanity for query sanity with GROQ and previews
- typescript
- Next-seo for good SEO optimization

## Setup Vercel
Import the project in vercel
Setup following environment variables (as plain text variables)

`SANITY_STUDIO_API_DATASET` with value for your prefered dataset
`SANITY_STUDIO_API_PROJECT_ID` with your sanity project id
`NEXT_PUBLIC_SANITY_PROJECT_ID` with value for your prefered dataset
`NEXT_PUBLIC_SANITY_DATASET` with your sanity project id


## Setup for local development
Create `.env` file in root path with the environment variables

```
# For Sanity Locally
# SANITY_STUDIO_API_PROJECT_ID = "abcd1245"
# SANITY_STUDIO_API_DATASET = "production"

# For Next Locally
NEXT_PUBLIC_SANITY_PROJECT_ID = "abcd1245"
NEXT_PUBLIC_SANITY_DATASET = "production"
```

Create `.env.development` and `.env.production` in studio path
and add sanity variables

```
# For Sanity Locally
# SANITY_STUDIO_API_PROJECT_ID = "abcd1245"
# SANITY_STUDIO_API_DATASET = "production"
```

## Development

To Start development server:
```
npm run dev
```
This will run frontend at localhost:3000
and you will find sanity studio at localhost:3000/studio

If you care for automatic reloads for the studio use localhost:3000 instead

Add http://localhost:3000 in sanity settings -> api - CORS Origins

### Things to know
Frontend startpage is fetched with slug `frontpage`


## Resources
- [Next.js](https://nextjs.org/)
- [Sanity](https://sanity.io/)
- [Chakra](https://chakra-ui.com/)
