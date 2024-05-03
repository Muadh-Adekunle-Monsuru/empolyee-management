'use client';
import { SetStateAction, useEffect, useState } from 'react';
import { account, ID } from '@/appwrite';
import Login from '../components/Login';
import Register from '../components/Register';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
	const [component, setComponent] = useState('login');
	const [login, setLogin] = useState(true);
	const [register, setRegister] = useState(false);
	const toggleComponent = (value) => {
		value === 'login' ? setComponent('login') : setComponent('register');
		setLogin((val) => !val);
		setRegister((val) => !val);
	};
	const router = useRouter();
	useEffect(() => {
		const getAccount = async () => {
			try {
				const toast_id = toast.info(
					'Getting Current User Session, Please Wait',
					{ autoClose: false }
				);
				await account
					.get()
					.then((User) => {
						router.replace('/dashboard');
					})
					.catch((e) => {
						toast.update(toast_id, {
							render: 'Please Log In Again!',
							autoClose: 5000,
							type: 'error',
						});
						// toast.error('No Current User, Log in to start a new session.');
					});
			} catch (e) {
				// toast.dismiss();
				console.log('Cant Get Current Session, Log In Instead');
			}
		};
		getAccount();
	}, []);

	const loginFunction = async (email: any, password: any) => {
		const toast_id = toast.info('Logging you in', { autoClose: false });
		try {
			const session = await account
				.createEmailPasswordSession(email, password)
				.then((session) => {
					router.replace('/dashboard');
				});
		} catch (e) {
			console.log('error login in', e);
			toast.update(toast_id, {
				render: `${e}`,
				autoClose: 5000,
				type: 'error',
			});
		}
	};

	const registerFunction = async (name, email, password) => {
		const toast_id = toast.info('Creating Account', { autoClose: false });
		try {
			await account.create(ID.unique(), email, password, name).then(() => {
				loginFunction(email, password);
			});
		} catch (e) {
			console.log('Error creating account', e);
			toast.update(toast_id, {
				render: `${e}`,
				autoClose: 5000,
				type: 'error',
			});
		}
	};

	return (
		<main className='flex min-h-screen items-center justify-between'>
			<ToastContainer />
			<div className='w-full h-screen bg-gradient-image bg-cover flex lg:justify-end justify-center items-center'>
				<header className='absolute top-0 left-0 text-[#023047] backdrop-blur-md p-3 py-5'>
					<div className='uppercase font-bold select-none text-lg  '>
						Apollonia
						<div className='text-[#bc6c25] tracking-[0.2em] border-t-2 border-double border-teal-700'>
							Dentals
						</div>
					</div>
				</header>
				<div className='lg:h-full h-1/2  w-3/4 lg:w-1/4 rounded-lg backdrop-blur-xl bg-slate-200/40 shadow-md flex justify-center items-center sm:max-w-80'>
					<div className='lg:w-[90%] w-full lg:h-1/2 h-full lg:border border-gray-600 rounded-xl overflow-hidden'>
						<div className='grid justify-evenly border-b-2 grid-cols-2 '>
							<div
								className={clsx(
									'text-center',
									'p-2',
									'border-r',
									{
										'bg-[#ff8356c4]': login,
									},
									{ 'text-white': login }
								)}
								onClick={() => toggleComponent('login')}
							>
								Login
							</div>
							<div
								className={clsx(
									'text-center',
									'p-2',
									'border-l',
									{
										'bg-[#ff8356c4]': register,
									},
									{ 'text-white': register }
								)}
								onClick={() => toggleComponent('register')}
							>
								Register
							</div>
						</div>

						<AnimatePresence mode='wait'>
							{component === 'login' ? (
								<motion.div
									key='login'
									initial={{ opacity: 0, x: '100%' }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: '100%' }}
									transition={{ type: 'tween' }}
									className=' h-3/4'
								>
									<Login onSubmit={loginFunction} />
								</motion.div>
							) : (
								<motion.div
									key='register'
									initial={{ opacity: 0, x: '-100%' }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: '-100%' }}
									transition={{ type: 'tween' }}
									className=' h-[85%]'
								>
									<Register onSubmit={registerFunction} />
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</div>
			</div>
		</main>
	);
}
