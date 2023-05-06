'use client';

import { motion } from 'framer-motion';

type Props = {
	children: React.ReactNode;
};

export default function MenuButton(props: Props) {
	return (
		<motion.button
			whileHover={{
				scale: 1.2,
			}}
			className='bg-primary text-primary-foreground transition-all hover:bg-secondary hover:text-secondary-foreground border-2 py-2 px-4 rounded-lg cursor-pointer'
		>
			{props.children}
		</motion.button>
	);
}
