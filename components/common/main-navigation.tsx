import NextLink from 'next/link';
import {Flex, Link} from '@chakra-ui/react';
import {InternalLink} from '@/models/objects/internal-link';
import {ExternalLink} from '@/models/objects/external-link';

type Props = {
	navigation?: Array<InternalLink | ExternalLink>;
	direction?: 'row' | 'column';
};

const resolveLink = (item: InternalLink | ExternalLink) => {
	if (item._type === 'externalLink' && item.slug?.current) {
		return {
			type: item._type,
			key: item._key,
			title: item.title,
			url: item.slug.current
		};
	}

	if (item._type === 'internalLink' && item.link?.slug?.current) {
		return {
			type: item._type,
			key: item._key,
			title: item.title,
			url: item.link.slug.current === 'frontpage' ? '/' : `/${item.link.slug.current}/`
		};
	}

	return null;
};

const MainNavigation = ({navigation, direction = 'row'}: Props) => {
	if (!navigation) {
		return null;
	}

	return (
		<Flex direction={direction}>
			{navigation.map((item) => {
				const link = resolveLink(item);

				if (!link || !link.url || !link.title) {
					return null;
				}

				if (link.type === 'internalLink') {
					return (
						<NextLink key={link.key} passHref href={link.url}>
							<Link padding={3}>{link.title}</Link>
						</NextLink>
					);
				}

				return (
					<Link key={link.key} isExternal href={link.url} padding={3}>
						{link.title}
					</Link>
				);
			})}
		</Flex>
	);
};

export default MainNavigation;
