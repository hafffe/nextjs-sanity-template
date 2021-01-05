import React from 'react';
import styles from './styles.css';

const PostPreview = (props: any) => {
	const {displayed} = props.document;

	if (!displayed?.slug?.current) {
		return <div>The post needs a slug before it can be previewed.</div>;
	}

	const url =
		process.env.NODE_ENV === 'production'
			? `../../posts/${displayed?.slug?.current}?preview`
			: `http://localhost:3000/posts/${displayed?.slug?.current}?preview`;

	return (
		<div className={styles.componentWrapper}>
			<div className={styles.iframeContainer}>
				<iframe src={url} frameBorder='0' />
			</div>
		</div>
	);
};

export default PostPreview;
