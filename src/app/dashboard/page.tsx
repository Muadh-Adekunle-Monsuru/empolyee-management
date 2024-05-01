'use client';
import React from 'react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { account, ID } from '@/appwrite';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
	UserIcon,
	UserCircleIcon,
	UserPlusIcon,
} from '@heroicons/react/24/outline';
import QuickInfo from '@/components/QuickInfo';
import TableHeader from '@/components/TableHeader';
import TableBody from '@/components/TableBody';
import axios from 'axios';
import NewEmployee from '@/components/NewEmployee';
import { motion, AnimatePresence } from 'framer-motion';
import UpdateEmployee from '@/components/UpdateEmployee';
export default function Dashboard() {
	const [user, setUser] = useState({
		name: '',
		email: '',
	});
	const [employees, setEmployees] = useState([]);
	const [showCreate, setShowCreate] = useState(false);
	const [oldData, setOldData] = useState({});
	const router = useRouter();
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		designation: 'Dentist',
		department: 'General Dentistry',
		accountStatus: 'Active',
		platformStatus: 'Invited',
	});
	const [showUpdate, setShowUpdate] = useState(false);
	useEffect(() => {
		const getAccount = async () => {
			await account.get().then(
				(User) => {
					// console.log('The current account', User);
					setUser(User);
					getData();
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

	const getData = async () => {
		try {
			await axios
				.get('http://localhost:8080/')
				.then((response) => {
					// console.log(response.data.length);
					setEmployees(response.data);
				})
				.catch((e) => console.log('Error fetching data', e));
		} catch (e) {
			console.log('error calling axios', e);
		}
	};
	const handleSubmit = async (e, formData) => {
		e.preventDefault();
		try {
			const response = await axios
				.post('http://localhost:8080/add', formData)
				.then((response) => {
					getData();
				})
				.then(() => {
					setShowCreate(false);
				});
			// console.log(response.data); // Log the response from the server
		} catch (error) {
			console.error('Error:', error);
		}
	};
	const handleDelete = async (id) => {
		const response = await axios
			.post('http://localhost:8080/delete', { _id: id })
			.then(() => {
				getData();
			})
			.then(() => getData())
			.catch((e) => {
				console.log('error deleting data', e);
			});
	};
	const handleUpdate = (data) => {
		setFormData(data);
		setShowUpdate(true);
	};
	const sendUpdate = async (e, data) => {
		e.preventDefault();
		console.log(data);
		const response = await axios
			.post('http://localhost:8080/update', data)
			.then(() => {
				getData();
				setShowUpdate(false);
			});
	};
	return (
		<div className='h-screen w-full'>
			<header className='flex items-center p-1 justify-between md:px-10'>
				<div className=''>
					<h3 className='font-bold text-xl'>Employee Management</h3>
					<p className='text-gray-500  text-xs py-2'>
						Manage employee accounts, departments, permission, roles and more
					</p>
				</div>
				<div className='border rounded-md justify-center items-center p-1 px-4 gap-2 shadow-sm hidden md:flex'>
					<div>
						<UserCircleIcon className='h-8 w-8 text-green-900' />
					</div>
					<div>
						<p className='font-semibold text-sm'>{user.name}</p>
						<p className='text-xs text-gray-500'>{user.email}</p>
					</div>
				</div>
			</header>
			<div className='border-t border-gray-300 w-full'></div>
			<section className='md:px-10  py-3 flex items-center gap-8'>
				<div className='flex-grow max-w-2xl'>
					<div>
						<QuickInfo data={employees} />
					</div>
				</div>
				<div className='flex justify-center flex-grow'>
					<button
						className='bg-orange-700 cursor-pointer shadow-md flex text-white text-xs py-3 px-3 rounded-lg'
						onClick={() => setShowCreate((val) => !val)}
					>
						<UserPlusIcon className='h-4 w-4 text-white' />
						Add New Employee
					</button>
				</div>
			</section>
			<div>
				<TableHeader />
				<AnimatePresence>
					{showCreate && (
						<motion.div
							initial={{ opacity: 0.5, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ type: 'tween' }}
							exit={{ opacity: 0, y: -50 }}
						>
							<NewEmployee
								setShowCreate={setShowCreate}
								toSubmit={handleSubmit}
							/>
						</motion.div>
					)}
				</AnimatePresence>
				<AnimatePresence>
					{showUpdate && (
						<motion.div
							initial={{ opacity: 0.5, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ type: 'tween' }}
							exit={{ opacity: 0, y: -50 }}
						>
							<UpdateEmployee
								toSubmit={sendUpdate}
								formData={formData}
								setFormData={setFormData}
							/>
						</motion.div>
					)}
				</AnimatePresence>
				<motion.div>
					<TableBody
						data={employees}
						handleDelete={handleDelete}
						handleUpdate={handleUpdate}
					/>
				</motion.div>
			</div>
			<div></div>
			<ToastContainer />
		</div>
	);
}
