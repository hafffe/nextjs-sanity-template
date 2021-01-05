import React from 'react';
import styles from './styles.css';

const PagePreview = (props: any) => {
	const {displayed} = props.document;
	if (!displayed?.slug?.current) {
		return <div>The page needs a slug before it can be previewed.</div>;
	}

	const slug = displayed?.slug?.current === 'frontpage' ? '' : displayed?.slug?.current;
	const url = process.env.NODE_ENV === 'production' ? `../../${slug}?preview` : `http://localhost:3000/${slug}?preview`;

	return (
		<div className={styles.componentWrapper}>
			<div className={styles.iframeContainer}>
				<iframe src={url} frameBorder='0' />
			</div>
		</div>
	);
};

export default PagePreview;
