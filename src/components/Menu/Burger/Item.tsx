import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

type Props = {
	item: string;
	onClick?: () => void;
	selected: boolean;
	href: string;
};

export default function Item(props: Props) {
	const { item, onClick, selected, href } = props;
	return (
		<motion.li
			animate={{ opacity: selected ? 1 : 0.5 }}
			className='w-full'
			onClick={onClick}
		>
			<Link
				to={href ? href : ''}
				spy={true}
				smooth={true}
				offset={50}
				duration={500}
				onClick={onClick}
				className='w-full transition-all hover:underline border-b border-rose py-4 flex items-center justify-between gap-6 cursor-pointer px-4'
			>
				{item}
				{selected && (
					<motion.div
						className='w-3 h-3 rounded-full bg-rose opacity-80'
						layoutId='dot'
					/>
				)}
			</Link>
		</motion.li>
	);
}
