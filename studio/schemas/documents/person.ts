import {RiUserSmileLine} from 'react-icons/ri';

const person = {
	name: 'person',
	type: 'document',
	title: 'Persons',
	icon: RiUserSmileLine,
	fields: [
		{
			name: 'name',
			title: 'Name',
			type: 'string',
			validation: (Rule: any) => Rule.required()
		},
		{
			name: 'title',
			title: 'Job title',
			type: 'string',
			validation: (Rule: any) => Rule.required()
		},
		{
			name: 'phone',
			title: 'Phone',
			type: 'string',
			validation: (Rule: any) => Rule.required()
		},
		{
			name: 'email',
			title: 'email',
			type: 'email',
			validation: (Rule: any) => Rule.required()
		},
		{
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true
			},
			validation: (Rule: any) => Rule.required()
		}
	],
	preview: {
		select: {
			title: 'name',
			media: 'image.asset'
		}
	}
};

export default person;
