'use client';
import React from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { account, ID } from '@/appwrite';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Dashboard() {
	const router = useRouter();
	useEffect(() => {
		const getAccount = async () => {
			await account.get().then(
				(User) => {
					console.log('The current account', User);
				},
				(error) => {
					console.log('error gettting account');
					toast.error('Sign In');
					router.replace('/');
				}
			);
		};
		getAccount();
	}, []);
	const logout = async () => {
		await account.deleteSession('current').then(() => {
			router.replace('/');
		});
	};

	return (
		<div className='h-screen w-full'>
			<div className='font-bold text-3xl'>Employee Management Dashboard</div>
			<ToastContainer />
		</div>
	);
}
