const siteLinks = {
	github: 'https://github.com/gabehamasaki/portfolio',
};

const ownerLinks = {
	linkedin: 'https://www.linkedin.com/in/gabriel-hamasaki',
	github: 'https://github.com/gabehamasaki',
};

const ownerInfo = {
	name: 'Gabriel Hamasaki',
	links: ownerLinks,
};

export const siteConfig = {
	name: 'Hamasaki',
	url: '',
	ogImage: '',
	description: '',
	links: siteLinks,
	owner: ownerInfo,
};

export type SiteConfig = typeof siteConfig;
