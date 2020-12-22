import {Fragment} from 'react';
import {v4 as uuidv4} from 'uuid';
import {Sections} from '@models/sections';
import {Blocks} from '..';

type Props = Sections[] | null;

const renderBlocks = (content: Props) => {
	if (!content) {
		return null;
	}

	return content.map((block) => {
		const key = block._key ?? uuidv4();

		return (
			<Fragment key={key}>
				<Blocks block={block} />
			</Fragment>
		);
	});
};

export default renderBlocks;
