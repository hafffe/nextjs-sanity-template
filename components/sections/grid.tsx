import {Grid as GridType} from '~/models/sections/grid';
import {RenderSection} from '.';

type Props = {
	data: GridType;
};

const Grid = ({data}: Props) => {
	if (!data.items) {
		return null;
	}

	return (
		<div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 items-center`}>
			{data?.items?.map((section) => (
				<RenderSection key={section._key} section={section} />
			))}
		</div>
	);
};

export default Grid;
