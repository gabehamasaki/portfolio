'use client';

import * as Avatar from '@radix-ui/react-avatar';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';

export default function Home() {
	return (
		<main className='w-full h-full'>
			<section
				className='w-full min-h-[calc(100vh-6rem)] flex items-center justify-center gap-8'
				id='top'
			>
				<div className='flex flex-col justify-between gap-4'>
					<h1 className='text-4xl max-md:text-2xl flex flex-col w-full'>
						I am
						<span className='text-primary font-bold text-7xl max-md:text-6xl max-sm:text-4xl max-xs:text-xl'>
							Software <span className='text-purple-900'>Engineer</span>
						</span>
					</h1>
					<div className='w-full h-1 rounded-lg bg-border'></div>
					<div className='max-w-[40rem] flex justify-center items-center gap-8'>
						<Image
							src='/img/react.png'
							alt='javascript'
							width={48}
							height={64}
							className='saturate-0 transition-all hover:saturate-100 rounded-lg '
						/>
						<Image
							src='/img/js.png'
							alt='javascript'
							width={48}
							height={48}
							className='saturate-0 transition-all hover:saturate-100 rounded-lg'
						/>
						<Image
							src='/img/ts.png'
							alt='javascript'
							width={48}
							height={48}
							className='saturate-0 transition-all hover:saturate-100 rounded-lg'
						/>
						<Image
							src='/img/golang.png'
							alt='javascript'
							width={48}
							height={48}
							className='saturate-0 transition-all hover:saturate-100 rounded-lg bg-foreground'
						/>
					</div>
				</div>
				<Tilt
					tiltMaxAngleX={5}
					tiltMaxAngleY={5}
					transitionSpeed={2000}
					className='max-lg:hidden animate-pulse'
				>
					<Image
						src='/img/developer.svg'
						alt='developer look the screen'
						width={550}
						height={550}
					/>
				</Tilt>
			</section>
			<section
				id='about'
				className='w-full min-h-screen flex items-center justify-center flex-col'
			>
				<h1 className='text-6xl text-primary mb-16 font-bold'>About Me</h1>
				<div className='flex max-lg:flex-col gap-16 items-center justify-center'>
					<div className=''>
						<Avatar.Root>
							<Avatar.Image
								src='/img/me.jpg'
								className='h-1/3 w-80 rounded-xl saturate-0 transition-all hover:saturate-100 select-none border-2'
							/>
						</Avatar.Root>
					</div>
					<div className='w-full max-w-2xl h-full flex flex-col gap-4 text-primary'>
						<div className='mb-4'>
							<p className='text-2xl font-bold'>Gabriel Hamasaki</p>
							<p className='text-xl font-light'>20 Year Old</p>
						</div>
						<p className='text-xl'>
							I am an enthusiastic software developer who is deeply passionate
							about technology. At present, I am pursuing a degree in Software
							Engineering from Estácio-SP.
						</p>
						<p className='text-xl'>
							My primary areas of expertise include Golang and NodeJS, and I
							possess a keen interest in crafting robust, cutting-edge solutions
							that can benefit individuals both personally and professionally. I
							take great pride in creating efficient and high-quality products
							that can make a significant impact.
						</p>
					</div>
				</div>
			</section>
		</main>
	);
}
