import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatDate(input: string | number): string {
	const date = new Date(input);
	return date.toLocaleDateString('pt-BR', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});
}

export function absoluteUrl(path: string) {
	return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}
