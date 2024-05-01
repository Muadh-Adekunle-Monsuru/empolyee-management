'use client';
import {
	UserGroupIcon,
	HomeIcon,
	DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
const links = [
	{ name: 'Employees', href: '/dashboard', icon: HomeIcon },
	{ name: 'Departments', href: '/dashboard/departments', icon: UserGroupIcon },
];
export default function NavLinks() {
	const pathname = usePathname();
	return (
		<>
			{links.map((link) => {
				const LinkIcon = link.icon;
				return (
					<Link
						key={link.name}
						href={link.href}
						className={clsx(
							'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-orange-50 hover:text-orange-700 md:flex-none md:justify-start md:p-2 md:px-3 my-3',
							{
								'bg-orange-50 text-orange-800': pathname === link.href,
							}
						)}
					>
						<LinkIcon className='w-6' />
						<p className='hidden md:block'>{link.name}</p>
					</Link>
				);
			})}
		</>
	);
}
