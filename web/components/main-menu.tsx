import React from 'react';
import Link from 'next/link';
import {Flex, Link as Li} from '@chakra-ui/react';
import {v4 as uuidv4} from 'uuid';
import {ExternalLinkOrInternalLink, Maybe} from '../types/types';

type Props = {
	navigation?: Maybe<Array<Maybe<ExternalLinkOrInternalLink>>>;
	direction?: 'row' | 'column';
};

const resolveLink = (x: ExternalLinkOrInternalLink) => {
	if (x.__typename === 'ExternalLink' && x.slug?.current) {
		return {
			isExternal: true,
			url: x.slug.current
		};
	}

	if (x.__typename === 'InternalLink' && x.link?.slug?.current) {
		return {
			isExternal: false,
			url: x.link.slug.current === 'frontpage' ? '/' : `/${x.link.slug.current}`
		};
	}

	return null;
};

const MainMenu = ({navigation, direction = 'row'}: Props) => {
	if (!navigation) {
		return null;
	}

	return (
		<Flex direction={direction}>
			{navigation.map((x) => {
				const link = resolveLink(x as ExternalLinkOrInternalLink);

				if (!link || !x?.title) {
					return null;
				}

				if (link.isExternal) {
					return (
						<Li key={x._key ?? uuidv4()} isExternal href={link.url} padding={3}>
							{x.title}
						</Li>
					);
				}

				return (
					<Link key={x._key ?? uuidv4()} passHref as={link.url} href={link.url}>
						<Li padding={3}>{x.title}</Li>
					</Link>
				);
			})}
		</Flex>
	);
};

export default MainMenu;
