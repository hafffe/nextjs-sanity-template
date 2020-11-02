import imageUrlBuilder from '@sanity/image-url';

const config = {
	projectId: `${process.env.PROJECT_ID}`,
	dataset: `${process.env.PROJECT_DATASET}`,
	useCdn: true
};

const builder = imageUrlBuilder(config);

export const urlFor = (source: any) => builder.image(source);
