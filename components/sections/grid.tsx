import {SimpleGrid} from '@chakra-ui/react';
import {Grid as GridType} from '@/models/sections/grid';
import {RenderSection} from '@/components/utils';

type Props = {
	data: GridType;
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
			{data?.items?.map((section) => (
				<RenderSection key={section._key} section={section} />
			))}
		</SimpleGrid>
	);
};

export default Grid;
