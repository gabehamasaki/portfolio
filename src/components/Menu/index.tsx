import Button from './Button';
import Container from './Container';
import Item from './Item';

type MenuProps = {
	items: string[];
	selected: number;
	setSelected: (i: number) => void;
};

export function Menu(props: MenuProps) {
	const { items, selected, setSelected } = props;
	return (
		<Container>
			{items.map((item, index) => (
				<Item
					key={index}
					selected={selected === index}
					onClick={() => setSelected(index)}
					href={`${item.split(' ')[0].toLowerCase()}`}
				>
					{item}
				</Item>
			))}
			<Button>Hire Me</Button>
		</Container>
	);
}
