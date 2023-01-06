import type {ReactNode} from 'react';

type Tag = 'main' | 'div' | 'article' | 'footer' | 'header';

const MaxWidthWrapper = ({className, type, children}: {className?: string; type?: Tag; children: ReactNode}) => {
	const ElementType = type || 'div';

	return <ElementType className={`max-w-5xl mx-auto px-8 ${className}`}>{children}</ElementType>;
};

export default MaxWidthWrapper;
