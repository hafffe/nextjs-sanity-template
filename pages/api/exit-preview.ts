import {NextApiResponse} from 'next';

const api = async (_: any, response: NextApiResponse) => {
	response.clearPreviewData();

	response.writeHead(307, {Location: '/'});
	response.end();
};

export default api;
