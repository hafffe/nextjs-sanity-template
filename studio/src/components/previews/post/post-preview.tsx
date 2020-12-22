import React from 'react';
import styles from './styles.css';

const previewSecret = process.env.SANITY_STUDIO_PREVIEW_TOKEN;
const projectUrl = process.env.SANITY_STUDIO_PRODUCTION_URL;

const PostPreview = (props: any) => {
	const {displayed} = props.document;
	if (!displayed?.slug?.current) {
		return <div>The post needs a slug before it can be previewed.</div>;
	}

	const url =
		process.env.NODE_ENV === 'production'
			? `${projectUrl}/api/preview/?secret=${previewSecret}&slug=/posts/${displayed?.slug?.current}`
			: `http://localhost:3000/api/preview/?secret=${previewSecret}&slug=/posts/${displayed?.slug?.current}`;

	return (
		<div className={styles.componentWrapper}>
			<div className={styles.iframeContainer}>
				<iframe src={url} frameBorder='0' />
			</div>
		</div>
	);
};

export default PostPreview;
