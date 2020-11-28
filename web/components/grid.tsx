import React from 'react';
import {SimpleGrid} from '@chakra-ui/react';
import {GridBlock} from '../types/types';
import {renderBlocks} from './utils/render-blocks';

type Props = {
	data: GridBlock;
};

const Grid = ({data}: Props) => {
	const sm = data?.columns?.small ? Number.parseInt(data.columns.small, 10) : 1;
	const md = data?.columns?.medium ? Number.parseInt(data.columns.medium, 10) : 1;
	const lg = data?.columns?.large ? Number.parseInt(data.columns.large, 10) : 1;

	if (!data.items) {
		return null;
	}

	return (
		<SimpleGrid className='Grid' columns={[sm, md, lg]} spacing={4} alignItems='center'>
			{renderBlocks(data.items)}
		</SimpleGrid>
	);
};

export default Grid;
