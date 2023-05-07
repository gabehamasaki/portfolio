'use client';
import { motion, useCycle } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { Menu } from '../Menu';
import Burger from '../Menu/Burger';

export function Header() {
	const items = ['About Me', 'Projects', 'Journey'];
	const [selected, setSelected] = useState(0);
	const [isOpen, toggleOpen] = useCycle(false, true);
	return (
		<div>
			<header className='fixed top-0 left-0 w-full h-20 bg-background border-b-2'>
				<div className='container h-full flex items-center justify-between max-md:justify-center'>
					<motion.div
						whileHover={{
							y: -2,
						}}
					>
						<Image
							src='/img/logo.png'
							width={256}
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
		</div>
	);
}
