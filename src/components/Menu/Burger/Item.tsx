import { motion } from 'framer-motion';

type Props = {
	item: string;
	onClick?: () => void;
	selected: boolean;
	href: string;
};

export default function Item(props: Props) {
	const { item, onClick, selected, href } = props;
	return (
		<motion.li className='w-full' onClick={onClick}>
			<motion.a
				href={href}
				animate={{ opacity: selected ? 1 : 0.5 }}
				className='w-full transition-all hover:underline border-b py-4 flex items-center justify-between gap-6 cursor-pointer px-4'
			>
				{item}
				{selected && (
					<motion.div
						className='w-3 h-3 rounded-full bg-primary opacity-80'
						layoutId='dot'
					/>
				)}
			</motion.a>
		</motion.li>
	);
}
