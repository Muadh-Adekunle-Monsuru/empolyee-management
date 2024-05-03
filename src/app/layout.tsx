import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Raleway } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const raleway = Raleway({ subsets: ['latin'] });
export const metadata: Metadata = {
	title: 'Apollonia Dentals',
	description: 'Employee Management Dashboard',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	// useClient();
	return (
		<html lang='en'>
			<body className={raleway.className}>{children}</body>
		</html>
	);
}
