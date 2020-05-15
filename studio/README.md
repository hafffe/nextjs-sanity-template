# Schema structure
Documents are top level schema types that uses other fields / objects.
To keep the GraphQL api consistent each document should be built up with the same structure.
All general / meta fields should be defined directly in document, this is e.g `Title`, `Slug`, `PublishedAt`. Documents content is built with (objects and / or blocks), and defined under object with name `Content`. `Content` is of type `array` and contains referers to objects called blocks e.g `imageBlock`, `textBlock`.
Blocks don't have any specific rules, it's just should contains different fields.

<details>
<summary>Example of Page Document</summary>

```
{
	name: 'page',
	title: 'Page',
	fields: [{
		name: 'title',
		title: 'Page title'
		type: 'string
	}, {
		name: 'slug',
		title: 'Slug',
		type: 'slug'
	}, {
			name: 'content',
			type: 'array',
			title: 'Page sections',
			description: 'Add, edit, and reorder sections',
			fieldset: 'content',
			of: [{type: 'imageBlock'}, {type: 'textBlock'}]
	}]
}
```
</details>


# Sanity Blogging Content Studio

Congratulations, you have now installed the Sanity Content Studio, an open source real-time content editing environment connected to the Sanity backend.

Now you can do the following things:

- [Read “getting started” in the docs](https://www.sanity.io/docs/introduction/getting-started?utm_source=readme)
- Check out the example frontend: [React/Next.js](https://github.com/sanity-io/tutorial-sanity-blog-react-next)
- [Read the blog post about this template](https://www.sanity.io/blog/build-your-own-blog-with-sanity-and-next-js?utm_source=readme)
- [Join the community Slack](https://slack.sanity.io/?utm_source=readme)
- [Extend and build plugins](https://www.sanity.io/docs/content-studio/extending?utm_source=readme)
