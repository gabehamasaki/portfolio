import { List } from '@phosphor-icons/react';
import { AnimatePresence, Cycle, motion } from 'framer-motion';
import Container from './Container';
import Item from './Item';

type MenuProps = {
	items: string[];
	selected: number;
	setSelected: (i: number) => void;
	isOpen: boolean;
	toggleOpen: Cycle;
};

export default function Burger(props: MenuProps) {
	const { items, selected, setSelected, isOpen, toggleOpen } = props;
	return (
		<>
			<Container isOpen={isOpen}>
				{isOpen && (
					<motion.nav
						className='mt-24 h-full'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.2 }}
					>
						<motion.ul className='h-screen flex flex-col gap-4 items-center list-none'>
							<AnimatePresence>
								{items.map((item, index) => (
									<Item
										item={item}
										selected={selected === index}
										key={item}
										onClick={() => {
											setSelected(index);
											toggleOpen();
										}}
										href={`${item.split(' ')[0].toLowerCase()}`}
									/>
								))}
								<div className='w-full px-8'>
									<motion.button
										whileHover={{
											scale: 1.2,
										}}
										className='bg-rose w-full text-primary transition-all rounded-lg py-2 px-4 cursor-pointer'
									>
										Hire Me
									</motion.button>
								</div>
							</AnimatePresence>
						</motion.ul>
					</motion.nav>
				)}
			</Container>
			<div
				onClick={() => toggleOpen()}
				className='max-md:block hidden fixed top-5 left-5'
			>
				<List width={32} height={32} />
			</div>
		</>
	);
}
