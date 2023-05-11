'use client';
import * as Avatar from '@radix-ui/react-avatar';
import Tilt from 'react-parallax-tilt';

export default function About() {
	return (
		<section id='about' className='w-full h-screen'>
			<div className='w-full h-full container'>
				<div className='w-full h-full flex flex-col items-center justify-center text-foreground'>
					<h1 className='text-4xl text-primary mb-24 font-bold text-rose'>
						<span className='font-normal'>{'<'}</span>
						About Me
						<span className='font-normal'>{'>'}</span>
					</h1>
					<div className='flex max-lg:flex-col gap-16 items-center justify-center'>
						<Tilt
							tiltMaxAngleX={5}
							tiltMaxAngleY={5}
							transitionSpeed={2000}
							className='max-lg:hidden shadow-lg rounded-lg shadow-rose'
						>
							<Avatar.Root>
								<Avatar.Image
									src='/img/me.jpg'
									className='h-1/3 w-80 rounded-lg grayscale select-none'
								/>
							</Avatar.Root>
						</Tilt>

						<div className='w-full max-w-2xl h-full flex flex-col justify-center items-center gap-4 text-primary'>
							<div className='mb-4 w-full'>
								<p className='text-2xl font-bold '>Gabriel Hamasaki</p>
								<p className='text-xl font-bold'>
									{new Date().getFullYear() - 2003}{' '}
									<span className='text-primary font-normal'>Years Old</span>
								</p>
							</div>
							<p className='text-xl'>
								I am an enthusiastic software developer who is deeply passionate
								about technology. At present, I am pursuing a bachelor degree in
								Software Engineering from Estácio - SP.
							</p>
							<p className='text-xl'>
								My primary areas of expertise include Golang and NodeJS, and I
								possess a keen interest in crafting robust, cutting-edge
								solutions that can benefit individuals both personally and
								professionally. I take great pride in creating efficient and
								high-quality products that can make a significant impact.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
