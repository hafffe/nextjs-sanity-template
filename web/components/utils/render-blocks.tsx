import React from 'react';
import {v4 as uuidv4} from 'uuid';
import {GridBlockOrImageBlockOrTextBlock, Maybe} from '../../types/types';
import {Blocks} from '..';

type Props = Array<Maybe<GridBlockOrImageBlockOrTextBlock>> | null;

export const renderBlocks = (content: Props) => {
	if (!content) {
		return null;
	}

	return content.map((block) => {
		if (!block?.__typename) {
			return null;
		}

		const key = block._key ?? uuidv4();

		return (
			<React.Fragment key={key}>
				<Blocks block={block} />
			</React.Fragment>
		);
	});
};
