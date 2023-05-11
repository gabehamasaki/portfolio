'use client';

import { motion } from 'framer-motion';

type Props = {
	children: React.ReactNode;
};

export default function Button(props: Props) {
	return (
		<motion.button
			whileHover={{
				scale: 1.2,
			}}
			className='bg-rose text-primary transition-all  py-2 px-4 rounded-lg cursor-pointer'
		>
			{props.children}
		</motion.button>
	);
}
