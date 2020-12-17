import {Box} from '@chakra-ui/react';
import {Spacer as SpacerType} from '@/models/sections/spacer';

type Props = {
	data: SpacerType;
};

const getSize = (size: string) => {
	switch (size) {
		case 'small':
			return 4;

		case 'medium':
			return 6;

		case 'large':
			return 8;

		case 'xlarge':
			return 10;

		default:
			return 6;
	}
};

const Spacer = ({data}: Props) => {
	const padding = getSize(data?.size ?? 'medium');

	return <Box paddingY={padding} backgroundColor='transparent' />;
};

export default Spacer;
