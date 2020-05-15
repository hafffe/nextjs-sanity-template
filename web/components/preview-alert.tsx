import React from 'react';
import {Alert, AlertIcon, AlertTitle, AlertDescription, CloseButton} from '@chakra-ui/core';

type Props = {
	preview: boolean;
};

const PreviewAlert: React.FunctionComponent<Props> = ({preview}) => {
	if (!preview) {
		return null;
	}

	return (
		<Alert status='info' variant='top-accent' color='black' position='fixed' bottom='5' alignSelf='center' width='40%'>
			<AlertIcon />
			<AlertTitle margin={2}>Preview</AlertTitle>
			<AlertDescription margin={3} padding={3}>
				You&apos;re using preview mode. To exit preview mode, click on the close button
			</AlertDescription>
			<a href='/api/exit-preview'>
				<CloseButton position='absolute' right='8px' top='8px' />
			</a>
		</Alert>
	);
};

export default PreviewAlert;
