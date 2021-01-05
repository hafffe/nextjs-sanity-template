const config = {
	widgets: [
		{
			name: 'document-list',
			options: {
				title: 'Last edited posts',
				order: '_updatedAt desc',
				types: ['post']
			},
			layout: {
				width: 'small',
				height: 'small'
			}
		},
		{
			name: 'document-list',
			options: {
				title: 'Last edited pages',
				order: '_updatedAt desc',
				types: ['page']
			},
			layout: {
				width: 'small',
				height: 'small'
			}
		},
		{
			name: 'project-info',
			layout: {
				width: 'large',
				height: 'small'
			}
		},
		{
			name: 'project-users',
			layout: {
				width: 'medium',
				height: 'small'
			}
		}
	]
};

export default config;
