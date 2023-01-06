import {RiFacebookBoxLine, RiInstagramLine, RiTwitterLine} from 'react-icons/ri';
import MaxWidthWrapper from './max-width-wrapper';
import type {SocialFields} from '~/models/objects/social-fields';

type Props = {
	socialFields?: SocialFields;
};

const Footer = ({socialFields}: Props) => {
	return (
		<MaxWidthWrapper className='flex flex-row flex-nowrap justify-center items-center pb-8' type='footer'>
			<p className='text-base'>
				Made by{' '}
				<a
					href='https://github.com/hafffe'
					target='_blank'
					rel='noreferrer'
					className='underline underline-offset-4'
				>
					Hafffe
				</a>{' '}
				for everyone
			</p>
			<div className='flex flex-nowrap pl-2'>
				{socialFields?.facebook && (
					<div className='p-0.5'>
						<a href={socialFields?.facebook} target='_blank' rel='noreferrer'>
							<RiFacebookBoxLine />
						</a>
					</div>
				)}

				{socialFields?.instagram && (
					<div className='p-0.5'>
						<a href={socialFields?.instagram} target='_blank' rel='noreferrer'>
							<RiInstagramLine />
						</a>
					</div>
				)}

				{socialFields?.twitter && (
					<div className='p-0.5'>
						<a href={socialFields?.twitter} target='_blank' rel='noreferrer'>
							<RiTwitterLine />
						</a>
					</div>
				)}
			</div>
		</MaxWidthWrapper>
	);
};

export default Footer;
