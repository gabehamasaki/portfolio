import { motion } from 'framer-motion';

type Props = {
	isOpen: boolean;
	children: React.ReactNode;
};

export default function Container({ isOpen, children }: Props) {
	return (
		<motion.div
			animate={{
				borderRight: isOpen
					? '2px solid hsl(var(--border))'
					: '0px solid hsl(var(--border))',
				width: isOpen ? '260px' : '0px',
			}}
			className='h-full max-md:block hidden bg-secondary absolute top-0 left-0'
		>
			{children}
		</motion.div>
	);
}
