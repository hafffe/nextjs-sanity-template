import {NextApiRequest, NextApiResponse} from 'next';

const api = async (request: NextApiRequest, response: NextApiResponse) => {
	if (request.query.secret !== process.env.PREVIEW_SECRET) {
		return response.status(401).json({message: 'Invalid token'});
	}

	if (!request.query.slug) {
		return response.status(401).json({message: 'Invalid slug'});
	}

	console.log('request.query.slug', request.query.slug);

	response.setPreviewData({});
	response.writeHead(307, {Location: request.query.slug});
	response.end();
};

export default api;
