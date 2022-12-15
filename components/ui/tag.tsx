import type {ReactNode} from 'react';

const Tag = ({children}: {children?: ReactNode}) => {
	return (
		<span className='text-xs inline-block py-1 px-2.5 mx-1 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-100 text-gray-700 rounded-md'>
			{children}
		</span>
	);
};

export default Tag;
