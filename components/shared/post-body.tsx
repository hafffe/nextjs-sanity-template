import {PortableText} from '@portabletext/react';
import type {BlockContent as BlockContentType} from '~/models/sections/block-content';
import type {SimpleBlockContent} from '~/models/objects/simple-block-content';

const PostBody = ({content}: {content: BlockContentType | SimpleBlockContent}) => {
	if (!content?.text) {
		return null;
	}

	return (
		<div className={`max-w-2xl`}>
			<PortableText value={content.text} />
		</div>
	);
};

export default PostBody;
