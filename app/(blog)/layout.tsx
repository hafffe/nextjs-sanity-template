import '~/styles/globals.css';
import {Work_Sans} from '@next/font/google';
import {Footer, Header, MaxWidthWrapper} from '~/components/ui';
import {siteSettingsQuery} from '~/lib/queries';
import {sanityClient} from '~/lib/sanity/client';
import type {SiteSettings} from '~/models/site-settings';

const workSans = Work_Sans({
	variable: '--font-work-sans',
	subsets: ['latin']
});

const RootLayout = async ({children}: {children: React.ReactNode}) => {
	const siteSettings = await sanityClient.fetch<SiteSettings>(siteSettingsQuery);

	return (
		<html lang='en' className={workSans.className}>
			<head />
			<body className='bg-white text-gray-800 min-h-screen'>
				<Header siteSettings={siteSettings} />
				<MaxWidthWrapper className='flex flex-col pt-4 pb-8' type='main'>
					{children}
				</MaxWidthWrapper>
				<Footer socialFields={siteSettings.socialFields}/>
			</body>
		</html>
	);
};

export default RootLayout;
