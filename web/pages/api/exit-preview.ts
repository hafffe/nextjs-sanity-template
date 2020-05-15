import {NextApiResponse} from 'next';

export default async (_: any, response: NextApiResponse) => {
	response.clearPreviewData();

	response.writeHead(307, {Location: '/'});
	response.end();
};
