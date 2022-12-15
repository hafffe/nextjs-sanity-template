const PagePreview = (props: any) => {
	const {displayed} = props.document;
	if (!displayed?.slug?.current) {
		return <div>The page needs a slug before it can be previewed.</div>;
	}

	const slug = displayed?.slug?.current === 'frontpage' ? '' : displayed?.slug?.current;
	const url =
		process.env.NODE_ENV === 'production' ? `../../${slug}?preview` : `http://localhost:3000/${slug}?preview`;

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

export default PagePreview;
