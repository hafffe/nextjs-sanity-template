import {NextApiRequest, NextApiResponse} from 'next';
import {apiClient} from '../../lib/api';
import {GET_POST_PREVIEW} from '../../lib/queries';
import {GetPostPreviewQuery} from '../../types/types';

export default async (request: NextApiRequest, response: NextApiResponse) => {
	if (request.query.secret !== process.env.PREVIEW_SECRET || !request.query.slug) {
		return response.status(401).json({message: 'Invalid token'});
	}

	const {allPost} = await apiClient<GetPostPreviewQuery>(GET_POST_PREVIEW, {
		id: request.query.slug
	});

	const post = allPost[0];

	if (!post || !post?.slug?.current) {
		return response.status(401).json({message: 'Invalid slug'});
	}

	response.setPreviewData({});
	response.writeHead(307, {Location: `/post/${post.slug.current}`});
	response.end();
};
