import React from 'react';
import styles from './styles.css';

interface Props {
	style?: string;
}

const getTag = (style: string) => {
	if (/^h\d/.test(style)) {
		const tag = /^h\d/.exec(style);
		console.log('tag', tag);
		return tag;
	}

	if (style.includes('normal')) {
		const tag = /normal/.exec(style);
		console.log('tag', tag);
		return tag;
	}
};

const BlockContent: React.FunctionComponent<Props> = (props) => {
	if (props.children && !props.style) {
		return <span>{props.children}</span>;
	}

	if (!props.children || !props.style) {
		return null;
	}

	const style = props?.style;
	const tag = getTag(style);
	const Heading = tag && (tag[0] as keyof JSX.IntrinsicElements);

	if (!Heading) {
		return null;
	}

	return (
		<div className={styles.center}>
			<Heading>{props.children}</Heading>
		</div>
	);
};

export default BlockContent;
