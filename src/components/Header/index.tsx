'use client';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import MenuButton from '../MenuButton';
import MenuItem from '../MenuItem';

export function Header() {
	const [selected, setSelected] = useState(0);
	const items = ['About Me', 'Projects', 'Journey'];
	return (
		<header className='sticky top-0 w-full h-20 bg-background border-b-2'>
			<div className='container h-full flex items-center justify-between'>
				<motion.div
					whileHover={{
						scale: 1.2,
					}}
				>
					<Image
						src='/favicon.svg'
						width={65}
						height={65}
						alt='Gabriel Hamasaki'
						className='p-1'
					/>
				</motion.div>
				<div>
					<nav className='flex gap-4'>
						<AnimatePresence>
							{items.map((item, i) => (
								<MenuItem
									key={i}
									selected={selected === i ? true : false}
									onClick={() => setSelected(i)}
									href={`#${item.split(' ')[0]}`}
								>
									{item}
								</MenuItem>
							))}
						</AnimatePresence>
						<MenuButton>Hire Me</MenuButton>
					</nav>
				</div>
			</div>
		</header>
	);
}
