import {MdPerson} from 'react-icons/md';

export default {
	name: 'person',
	type: 'document',
	title: 'Persons',
	icon: MdPerson,
	fields: [
		{
			name: 'name',
			title: 'Name',
			type: 'string'
		},
		{
			name: 'title',
			title: 'Job title',
			type: 'string'
		},
		{
			name: 'phone',
			title: 'Phone',
			type: 'string'
		},
		{
			name: 'email',
			title: 'email',
			type: 'email'
		},
		{
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true
			}
		}
	],
	preview: {
		select: {
			title: 'name',
			media: 'image.asset'
		}
	}
};
