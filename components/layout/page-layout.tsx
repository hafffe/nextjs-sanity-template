import {Heading} from '~/components/ui';
import {RenderSection} from '~/components/sections';
import type {Page} from '~/models/page';

type Props = {
	page: Page;
	preview?: boolean;
};

const IndexPage = ({page, preview = false}: Props) => {
	if (preview && !page) {
		return <Heading level='h2'>Loading...</Heading>;
	}

	return (
		<>
			{page?.content?.map((section) => {
				if (!section || Object.keys(section).length === 0) {
					return null;
				}

				return <RenderSection key={section._key} section={section} />;
			})}
		</>
	);
};

export default IndexPage;
