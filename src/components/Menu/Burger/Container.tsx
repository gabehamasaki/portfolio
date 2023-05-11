import { motion } from 'framer-motion';

type Props = {
	isOpen: boolean;
	children: React.ReactNode;
};

export default function Container({ isOpen, children }: Props) {
	return (
		<motion.div
			animate={{
				borderRight: isOpen ? '2px solid var(--rose)' : '0px solid var(--rose)',
				width: isOpen ? '260px' : '0px',
			}}
			className='h-full max-md:block hidden bg-background fixed top-0 left-0 overflow-hidden'
		>
			{children}
		</motion.div>
	);
}
