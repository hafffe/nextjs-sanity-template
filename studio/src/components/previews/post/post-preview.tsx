import React from 'react';

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
		<div>
			<iframe
				src={url}
				frameBorder='0'
				style={{border: 0, height: '100%', left: '0', position: 'absolute', top: '0', width: '100%'}}
			/>
		</div>
	);
};

export default PostPreview;
