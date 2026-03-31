import rss from '@astrojs/rss';

export const GET = async context => rss({
	title: 'Ajay Gautam — Updates',
	description: 'Site updates from Ajay Gautam.',
	site: context.site,
	items: [],
	trailingSlash: false,
});
