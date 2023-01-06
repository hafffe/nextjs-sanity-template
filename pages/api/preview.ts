import {NextApiRequest, NextApiResponse} from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	res.setPreviewData({});

	const slug = req.query.type === 'post' ? `/posts/${req.query.slug}` : `/${req.query.slug}`;
	res.writeHead(307, {Location: slug});
	res.end();
};

export default handler;
