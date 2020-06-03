import {NextApiRequest, NextApiResponse} from 'next';
import {apiClient} from '../../lib/api';
import {GET_POST_PREVIEW, GET_PAGE_PREVIEW} from '../../lib/queries';
import {GetPostPreviewQuery, GetPagePreviewQuery} from '../../types/types';

export default async (request: NextApiRequest, response: NextApiResponse) => {
	if (request.query.secret !== process.env.PREVIEW_SECRET || !request.query.slug || !request.query.type) {
		return response.status(401).json({message: 'Invalid token'});
	}

	if (!request.query.slug) {
		return response.status(401).json({message: 'Invalid slug'});
	}

	let location: string | null;

	switch (request.query.type) {
		case 'post': {
			const {allPost} = await apiClient<GetPostPreviewQuery>(GET_POST_PREVIEW, {
				id: request.query.slug
			});

			const post = allPost[0];

			if (!post?.slug?.current) {
				return response.status(401).json({message: 'Invalid slug'});
			}

			location = `/posts/${post.slug.current}`;
			break;
		}

		case 'page': {
			const {allPage} = await apiClient<GetPagePreviewQuery>(GET_PAGE_PREVIEW, {
				id: request.query.slug
			});

			const page = allPage[0];
			if (!page?.slug?.current) {
				return response.status(401).json({message: 'Invalid slug'});
			}

			location = `/${page.slug.current}`;
			break;
		}

		default: {
			return response.status(401).json({message: 'Invalid type'});
		}
	}

	response.setPreviewData({});
	response.writeHead(307, {Location: location});
	response.end();
};
