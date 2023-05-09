'use client';

import * as Avatar from '@radix-ui/react-avatar';
import Image from 'next/image';
import { useRef } from 'react';
import Tilt from 'react-parallax-tilt';
import useScrollSnap from 'react-use-scroll-snap';
import Typewriter from 'typewriter-effect';

export default function Home() {
	const scrollRef = useRef(null);
	useScrollSnap({ ref: scrollRef, duration: 100, delay: 0 });

	return (
		<main className='w-full h-screen container' ref={scrollRef}>
			<section className='w-full h-screen flex items-center justify-between p-4 max-sm:p-4'>
				<div className='w-full max-w-lg max-lg:max-w-full flex flex-col justify-between'>
					<div className='flex flex-col w-full max-lg:items-center'>
						<h1 className='text-4xl font-light max-md:text-3xl'>I am</h1>
						<h1 className='text-primary font-bold text-5xl max-md:text-4xl max-sm:text-3xl max-xs:text-xl'>
							<Typewriter
								options={{
									strings: [
										'Software <span class="text-purple-900">Engineer</span>',
										'<span class="text-purple-900">Fullstack</span> Developer',
									],
									autoStart: true,
									loop: true,
								}}
							/>
						</h1>
					</div>
					<div className='w-full h-1 rounded-lg bg-border animate-pulse mb-4 mt-2'></div>
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
				className='w-full h-screen flex items-center justify-center flex-col'
			>
				<h1 className='text-6xl text-primary mb-16 font-bold'>About Me</h1>
				<div className='flex max-lg:flex-col gap-16 items-center justify-center'>
					<Tilt
						tiltMaxAngleX={5}
						tiltMaxAngleY={5}
						transitionSpeed={2000}
						className='max-lg:hidden animate-pulse'
					>
						<Avatar.Root>
							<Avatar.Image
								src='/img/me.jpg'
								className='h-1/3 w-80 rounded-xl saturate-0 transition-all hover:saturate-100 select-none border-2'
							/>
						</Avatar.Root>
					</Tilt>

					<div className='w-full max-w-2xl h-full flex flex-col gap-4 text-primary'>
						<div className='mb-4'>
							<p className='text-2xl font-bold'>Gabriel Hamasaki</p>
							<p className='text-xl font-light'>
								{new Date().getFullYear() - 2003} Year Old
							</p>
						</div>
						<p className='text-xl'>
							I am an enthusiastic software developer who is deeply passionate
							about technology. At present, I am pursuing a bachelor degree in
							Software Engineering from Estácio - SP.
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
