import React from 'react';
import styles from './styles.css';

const previewSecret = process.env.SANITY_STUDIO_PREVIEW_TOKEN;
const projectUrl = process.env.SANITY_STUDIO_PRODUCTION_URL;

const PostPreview = (props: any) => {
	const {displayed} = props.document;
	if (!displayed?.slug?.current) {
		return <div>The product needs a slug before it can be previewed.</div>;
	}

	const isFrontPage = displayed?.slug?.current === 'frontpage';
	const pageUrl =
		process.env.NODE_ENV === 'production' ? process.env.SANITY_STUDIO_PRODUCTION_URL : 'http://localhost:3000';

	const url = isFrontPage
		? `${pageUrl}/api/preview/?secret=${previewSecret}&slug=/`
		: `${projectUrl}/api/preview/?secret=${previewSecret}&slug=/${displayed?.slug?.current}`;

	return (
		<div className={styles.componentWrapper}>
			<div className={styles.iframeContainer}>
				<iframe src={url} frameBorder='0' />
			</div>
		</div>
	);
};

export default PostPreview;
