import {formatInTimeZone} from 'date-fns-tz';
import {Text} from '@chakra-ui/react';

const Date = ({publishedAt}: {publishedAt: string}) => {
	const date = formatInTimeZone(publishedAt, 'Europe/Amsterdam', 'MMM dd, yyyy');

	return (
		<Text fontSize='sm'>
			{date}
		</Text>
	);
};

export default Date;
