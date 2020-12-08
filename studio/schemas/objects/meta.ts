import {RiShareLine} from 'react-icons/ri';

export default {
	title: 'Meta Information',
	name: 'metaFields',
	type: 'object',
	icon: RiShareLine,
	fieldsets: [
		{
			name: 'opengraph',
			title: 'Open Graph Protocol',
			options: {
				collapsible: true,
				collapsed: true
			}
		}
	],
	fields: [
		{
			name: 'metaTitle',
			title: 'Meta Title (Overrides to default title)',
			type: 'string'
		},
		{
			name: 'metaDescription',
			title: 'Meta Description',
			type: 'string'
		},
		{
			name: 'openGraphImage',
			title: 'Open Graph Image',
			type: 'image',
			description: 'Ideal size for open graph images is 1200 x 600',
			options: {
				hotspot: true
			},
			fieldset: 'opengraph'
		},
		{
			name: 'openGraphTitle',
			title: 'Open Graph Title',
			type: 'string',
			fieldset: 'opengraph'
		},
		{
			name: 'openGraphDescription',
			title: 'Open Graph Description',
			type: 'text',
			fieldset: 'opengraph'
		}
	]
};
