'use client';

import About from '@/components/About';
import Main from '@/components/Main';
import { useRef } from 'react';
import useScrollSnap from 'react-use-scroll-snap';

export default function Home() {
	const scrollRef = useRef(null);
	useScrollSnap({ ref: scrollRef, duration: 100, delay: 0 });

	return (
		<main className='w-full h-screen' ref={scrollRef}>
			<Main />
			<About />
		</main>
	);
}
