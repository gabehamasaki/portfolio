'use client';

import { motion } from 'framer-motion';

type Props = {
	href?: string;
	children: React.ReactNode;
	hire?: boolean;
	selected?: boolean;
	onClick?: () => void;
};

export default function Item(props: Props) {
	return (
		<ul className='flex flex-col items-center justify-center'>
			<motion.a
				animate={{ opacity: props.selected ? 1 : 0.5 }}
				onClick={props.onClick}
				href={props.href}
				className='relative transition-all hover:underline hover:brightness-150 border-b p-2 cursor-pointer'
			>
				{props.children}
				{props.selected && (
					<motion.div
						className='absolute top-full left-0 w-full h-1 rounded-lg bg-primary opacity-80'
						layoutId='underline'
					/>
				)}
			</motion.a>
		</ul>
	);
}
