'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

type Props = {
	href?: string;
	children: React.ReactNode;
	hire?: boolean;
	selected?: boolean;
	onClick?: () => void;
};

export default function Item(props: Props) {
	return (
		<motion.ul
			animate={{ opacity: props.selected ? 1 : 0.5 }}
			className='flex flex-col items-center justify-center'
		>
			<Link
				to={props.href ? props.href : ''}
				spy={true}
				smooth={true}
				offset={50}
				duration={500}
				onClick={props.onClick}
				className='relative transition-all hover:underline hover:brightness-150 border-b p-2 cursor-pointer'
			>
				{props.children}
				{props.selected && (
					<motion.div
						className='absolute top-full left-0 w-full h-1 rounded-lg bg-rose opacity-80'
						layoutId='underline'
					/>
				)}
			</Link>
		</motion.ul>
	);
}
