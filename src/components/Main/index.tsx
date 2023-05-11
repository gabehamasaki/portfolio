'use client';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';
import Typewriter from 'typewriter-effect';

export default function Main() {
	return (
		<section className='w-full h-screen flex items-center justify-between p-4 max-sm:p-4 container'>
			<div className='w-full max-w-lg max-lg:max-w-full flex flex-col justify-between'>
				<div className='flex flex-col w-full max-lg:items-center'>
					<h1 className='text-4xl font-light max-md:text-3xl'>I am</h1>
					<h1 className='text-primary font-bold text-5xl max-md:text-4xl max-sm:text-3xl max-xs:text-xl '>
						<Typewriter
							options={{
								strings: [
									'Software <span class="text-rose">Engineer</span>',
									'<span class="text-rose">FullStack</span> Developer',
								],
								autoStart: true,
								loop: true,
							}}
						/>
					</h1>
				</div>
				<div className='w-full h-1 rounded-lg bg-primary mb-4 mt-2'></div>
				<div className='max-w-[40rem] flex justify-center items-center gap-8'>
					<Image
						src='/img/react.png'
						alt='javascript'
						width={48}
						height={64}
						className='saturate-0 transition-all hover:saturate-100 rounded-lg'
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
				className='max-lg:hidden transition-all brightness-75 hover:brightness-100'
			>
				<Image
					src='/img/developer.svg'
					alt='developer look the screen'
					width={550}
					height={550}
				/>
			</Tilt>
		</section>
	);
}
