import { AnimatePresence } from 'framer-motion';

type Props = {
	children: React.ReactNode;
};

export default function Container({ children }: Props) {
	return (
		<nav className='flex gap-4'>
			<AnimatePresence>{children}</AnimatePresence>
		</nav>
	);
}
