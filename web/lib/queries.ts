import gql from 'graphql-tag';

export const SITE_SETTINGS = gql`
	query SiteSettings {
		SiteSettings(id: "siteSettings") {
			title
			description
			keywords
			navigation {
				__typename
				... on ExternalLink {
					title
					slug {
						current
					}
				}
				... on InternalLink {
					title
					link {
						slug {
							current
						}
					}
				}
			}
			socialFields {
				twitter
				instagram
				facebook
			}
		}
	}
`;

const gridBlockFragment = gql`
	fragment GridBlock on GridBlock {
		_key
		_type
		columns {
			small
			medium
			large
		}
		items {
			__typename
			alt
			image {
				_key
				_type
				asset {
					_id
					_type
					assetId
					metadata {
						lqip
						dimensions {
							aspectRatio
							height
							width
						}
					}
				}
			}
		}
	}
`;

const imageBlockFragment = gql`
	fragment ImageBlock on ImageBlock {
		_key
		_type
		alt
		asset {
			_id
			_type
			assetId
			metadata {
				lqip
				dimensions {
					aspectRatio
					height
					width
				}
			}
		}
	}
`;

const textBlockFragment = gql`
	fragment TextBlock on TextBlock {
		_key
		_type
		textRaw
	}
`;

const youtubeBlockFragment = gql`
	fragment YoutubeBlock on YoutubeBlock {
		_key
		_type
		url
		autoPlay
		muted
	}
`;

export const GET_PAGE = gql`
	query Page($id: String!) {
		allPage(where: {slug: {current: {eq: $id}}}) {
			_key
			_type
			_id
			title
			slug {
				current
			}
			content {
				__typename
				...GridBlock
				...ImageBlock
				...TextBlock
				...YoutubeBlock
			}
		}
	}
	${gridBlockFragment}
	${imageBlockFragment}
	${textBlockFragment}
	${youtubeBlockFragment}
`;

export const GET_PAGE_PREVIEW = gql`
	query GetPagePreview($id: String!) {
		allPage(where: {_: {is_draft: true}, slug: {current: {eq: $id}}}) {
			_key
			_type
			_id
			title
			slug {
				current
			}
			content {
				__typename
				...GridBlock
				...ImageBlock
				...TextBlock
				...YoutubeBlock
			}
		}
	}
	${gridBlockFragment}
	${imageBlockFragment}
	${textBlockFragment}
	${youtubeBlockFragment}
`;

export const GET_POSTS = gql`
	query PostList($limit: Int!) {
		allPost(limit: $limit, sort: {_createdAt: DESC}, where: {_: {is_draft: false}}) {
			_key
			_type
			_id
			title
			publishedAt
			excerpt {
				_key
				_type
				textRaw
			}
			slug {
				current
			}
			author {
				name
			}
			content {
				__typename
				...GridBlock
				...ImageBlock
				...TextBlock
				...YoutubeBlock
			}
		}
	}
	${gridBlockFragment}
	${imageBlockFragment}
	${textBlockFragment}
	${youtubeBlockFragment}
`;

export const GET_POST = gql`
	query GetPost($id: String!) {
		allPost(where: {slug: {current: {eq: $id}}}) {
			_key
			_type
			_id
			title
			publishedAt
			keywords
			slug {
				current
			}
			author {
				name
				image {
					asset {
						_type
						_id
						assetId
					}
				}
			}
			content {
				__typename
				...GridBlock
				...ImageBlock
				...TextBlock
				...YoutubeBlock
			}
		}
	}
	${gridBlockFragment}
	${imageBlockFragment}
	${textBlockFragment}
	${youtubeBlockFragment}
`;

export const GET_POST_PREVIEW = gql`
	query GetPostPreview($id: String!) {
		allPost(where: {_: {is_draft: true}, slug: {current: {eq: $id}}}) {
			_key
			_type
			_id
			title
			publishedAt
			keywords
			excerpt {
				_key
				_type
				textRaw
			}
			slug {
				current
			}
			author {
				name
			}
			content {
				__typename
				...GridBlock
				...ImageBlock
				...TextBlock
			}
		}
	}
	${gridBlockFragment}
	${imageBlockFragment}
	${textBlockFragment}
`;

export const GET_POSTS_WITH_SLUG = gql`
	query getAllPostsWithSlug {
		allPost(where: {_: {is_draft: false}}) {
			slug {
				current
			}
		}
	}
`;

export const GET_PAGES_WITH_SLUG = gql`
	query getAllPagesWithSlug {
		allPage(where: {_: {is_draft: false}}) {
			slug {
				current
			}
		}
	}
`;
