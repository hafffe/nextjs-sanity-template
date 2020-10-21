import React from 'react';
import {Box} from '@chakra-ui/core';
import {Image, TextBlock} from '.';
import {Cell as CellProps} from '../types/types';

type Props = {
	data: CellProps;
};

const Cell = ({data}: Props) => (
	<Box>
		{data?.image?.asset && <Image asset={data.image.asset} alt={data?.alt} />}
		{data?.text?.textRaw && <TextBlock data={data.text} />}
	</Box>
);

export default Cell;
