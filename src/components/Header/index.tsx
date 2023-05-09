'use client';
import { CaretUp } from '@phosphor-icons/react';
import { motion, useCycle } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { Menu } from '../Menu';
import Burger from '../Menu/Burger';

export function Header() {
	const items = ['About Me', 'Projects', 'Journey'];
	const [selected, setSelected] = useState(-1);
	const [isOpen, toggleOpen] = useCycle(false, true);
	const [isShownButton, setShownButton] = useState(false);

	useEffect(() => {
		const handleScrollButtonVisibility = () => {
			window.pageYOffset > 450 ? setShownButton(true) : setShownButton(false);
		};
		window.addEventListener('scroll', handleScrollButtonVisibility);

		return () => {
			window.removeEventListener('scroll', handleScrollButtonVisibility);
		};
	}, []);

	return (
		<>
			<header className='fixed top-0 left-0 w-full h-20 bg-background border-b-2'>
				<div className='container bg-background h-full flex items-center justify-between max-md:justify-center'>
					<motion.div
						whileHover={{
							y: -2,
						}}
					>
						<Image
							src='/img/logo.png'
							width={280}
							height={50}
							alt='Gabriel Hamasaki'
							className='p-6'
						/>
					</motion.div>
					<div className='max-md:hidden'>
						<Menu items={items} selected={selected} setSelected={setSelected} />
					</div>
				</div>
			</header>
			<Burger
				items={items}
				isOpen={isOpen}
				toggleOpen={toggleOpen}
				selected={selected}
				setSelected={setSelected}
			/>
			<motion.div
				animate={{ opacity: isShownButton ? 1 : 0 }}
				className='w-16 h-16 rounded-full bg-secondary fixed bottom-8 right-8 flex items-center justify-center'
			>
				<Link
					to='top'
					spy={true}
					smooth={true}
					offset={50}
					duration={500}
					className='w-full h-full flex items-center justify-center text-3xl font-bold'
					onClick={() => setSelected(-1)}
				>
					<CaretUp />
				</Link>
			</motion.div>
		</>
	);
}
