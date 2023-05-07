import { Header } from '@/components/Header';
import { siteConfig } from '@/config/site';
import { fontSans } from '@/lib/fonts';
import '../styles/globals.css';

export const metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	keywords: ['Next.js', 'React', 'Tailwind CSS', 'Portfolio'],
	authors: [
		{
			name: siteConfig.owner.name,
			url: siteConfig.owner.links.github,
		},
	],
	creator: 'gabehamasaki',
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' },
	],
	openGraph: {
		type: 'website',
		locale: 'pt_BR',
		url: siteConfig.url,
		title: siteConfig.name,
		description: siteConfig.description,
		siteName: siteConfig.name,
		images: [
			{
				url: siteConfig.ogImage,
				width: 1200,
				height: 630,
				alt: siteConfig.name,
			},
		],
	},
	icons: {
		icon: {
			url: '/favicon.ico',
			type: 'image/x-icon',
		},
		apple: '/apple-touch-icon.png',
	},
	manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='pt-br'>
			<body
				className={`min-h-screen flex flex-col font-sans antialiased ${fontSans.variable}`}
			>
				<Header />
				<div className='container mt-6'>{children}</div>
			</body>
		</html>
	);
}
