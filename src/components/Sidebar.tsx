'use client';
import React from 'react';
import NavLinks from './NavLinks';
import { PowerIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import { account, ID } from '@/appwrite';
export default function Sidebar() {
	const router = useRouter();
	const logout = async () => {
		await account.deleteSession('current').then(() => {
			router.replace('/');
		});
	};
	return (
		<div className='h-full shadow-md flex md:flex-col items-center'>
			<header className='text-[#023047] backdrop-blur-md p-3 py-2 md:w-32 w-28'>
				<div className='uppercase font-bold select-none md:text-lg text-sm  '>
					Apollonia
					<div className='text-[#bc6c25] tracking-[0.2em] border-t-2 border-double border-teal-700'>
						Dentals
					</div>
				</div>
			</header>
			<div className='border-t border-gray-300 w-full hidden md:block'></div>
			<div className='flex grow flex-row justify-between items-center space-x-2 md:flex-col md:space-x-0 md:space-y-2 md:py-5'>
				<div className='flex md:flex-col'>
					<NavLinks />
				</div>
				<button
					className='flex h-[48px] items-center justify-center gap-2 rounded-md bg-red-50 p-3 text-sm font-medium hover:bg-red-100 hover:text-red-600 md:flex-none md:justify-start md:p-2 md:px-3'
					onClick={logout}
				>
					<PowerIcon className='w-6' />
					<div className='hidden md:block'>Sign Out</div>
				</button>
			</div>
		</div>
	);
}
