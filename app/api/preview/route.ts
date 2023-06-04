import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const slug = searchParams.get('slug');
	const type = searchParams.get('type');

	const target = type === 'post' ? `/posts/${slug}` : `/${slug}`;

	draftMode().enable();
	redirect(target);
}
