import {PortableText} from '@portabletext/react';
import Link from 'next/link';
import {IoIosQuote} from 'react-icons/io';
import type {BlockContent as BlockContentType} from '~/models/sections/block-content';
import {Image} from '../shared';
import {Heading} from '../ui';

const BlockContent = ({data}: {data: BlockContentType}) => {
	const blocks = data.text;

	if (!blocks) {
		return null;
	}

	return (
		<PortableText
			value={blocks}
			components={{
				types: {
					customImage: ({value}) => <Image data={value} width={960} height={600} />
				},
				marks: {
					link: ({children, value}) => <Link href={`${value.href}`}>{children}</Link>,
					italic: ({children}) => <i>{children}</i>
				},
				block: {
					h1: ({children}) => <Heading level='h1'>{children}</Heading>,
					h2: ({children}) => <Heading level='h2'>{children}</Heading>,
					h3: ({children}) => <Heading level='h3'>{children}</Heading>,
					h4: ({children}) => <Heading level='h4'>{children}</Heading>,
					h5: ({children}) => <Heading level='h5'>{children}</Heading>,
					h6: ({children}) => <Heading level='h6'>{children}</Heading>,
					'h1+center': ({children}) => (
						<Heading level='h1' className='text-center'>
							{children}
						</Heading>
					),
					'h2+center': ({children}) => (
						<Heading level='h2' className='text-center'>
							{children}
						</Heading>
					),
					'h3+center': ({children}) => (
						<Heading level='h3' className='text-center'>
							{children}
						</Heading>
					),
					'h4+center': ({children}) => (
						<Heading level='h4' className='text-center'>
							{children}
						</Heading>
					),
					'h5+center': ({children}) => (
						<Heading level='h5' className='text-center'>
							{children}
						</Heading>
					),
					'h6+center': ({children}) => (
						<Heading level='h6' className='text-center'>
							{children}
						</Heading>
					),
					blockquote: ({children}) => (
						<div className='py-1'>
							<blockquote className='flex'>
								<IoIosQuote />
								<p className='pl-1 text-lg font-semibold'>{children}</p>
							</blockquote>
						</div>
					),
					normal: ({children}) => <p className='mt-1'>{children}</p>,
					'normal+center': ({children}) => <p className='text-center'>{children}</p>
				}
			}}
		/>
	);
};

export default BlockContent;
