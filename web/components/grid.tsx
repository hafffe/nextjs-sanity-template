import React from 'react';
import {Box, SimpleGrid} from '@chakra-ui/core';
import {v4 as uuidv4} from 'uuid';
import Cell from './cell';
import {GridBlock} from '../types/types';

type Props = {
	data: GridBlock;
};

const Grid = ({data}: Props) => {
	const sm = data?.columns?.small ? Number.parseInt(data.columns.small, 10) : 1;
	const md = data?.columns?.medium ? Number.parseInt(data.columns.medium, 10) : 1;
	const lg = data?.columns?.large ? Number.parseInt(data.columns.large, 10) : 1;

	return (
		<Box marginX='auto' paddingY={4}>
			<SimpleGrid className='Grid' columns={[sm, md, lg]} spacing={4}>
				{data.items?.map((x) => {
					if (x === null) {
						return null;
					}

					const key = x?._key ?? uuidv4();

					return <Cell key={key} data={x} />;
				})}
			</SimpleGrid>
		</Box>
	);
};

export default Grid;
