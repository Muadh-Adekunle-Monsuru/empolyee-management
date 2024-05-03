'use client';
import React from 'react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { account } from '@/appwrite';
import axios from 'axios';
import { UserIcon } from '@heroicons/react/24/outline';
import { TrashIcon, PencilSquareIcon } from '@heroicons/react/24/outline';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Department() {
	const router = useRouter();
	const [department, setDepartement] = useState([]);
	const [newDept, setNewDept] = useState('');
	useEffect(() => {
		toast.loading('Loading');
		const getAccount = async () => {
			await account.get().then(
				(User) => {
					toast.dismiss();
					getData();
				},
				(error) => {
					console.log('error getting account');
					router.replace('/');
				}
			);
		};
		getAccount();
	}, []);

	const getData = async () => {
		try {
			await axios.get('http://localhost:8080/departments').then((response) => {
				setDepartement(response.data);
			});
		} catch (e) {
			console.log('error calling axios', e);
			toast.error('Cant connect to database ' + e, {
				autoClose: false,
			});
		}
	};

	const handleAdd = async (value) => {
		console.log(value);
		try {
			await axios
				.post('http://localhost:8080/addept', { departmentName: value })
				.then((response) => {
					console.log(response);
					getData();
					setNewDept('');
				});
		} catch (e) {
			console.log('error adding new departement', e);
			toast.error('Failed to add new entry ' + e, {
				autoClose: false,
			});
		}
	};
	const handleDelete = async (id) => {
		const response = await axios
			.post('http://localhost:8080/deletedept', { _id: id })
			.then(() => {
				getData();
			})
			.then(() => getData())
			.catch((e) => {
				toast.error('Failed to delete entry ' + e, {
					autoClose: false,
				});
			});
	};
	return (
		<div className='h-full w-full'>
			<header className='flex items-center p-1 justify-between md:px-10'>
				<div className=''>
					<h3 className='font-bold text-xl'>Department Management</h3>
					<p className='text-gray-500  text-xs py-2'>
						Manage departments, designations, roles and more
					</p>
				</div>
			</header>
			<div className='border-t border-gray-300 w-full'></div>
			<div className='m-3 px-3 py-1 border shadow-sm w-44 flex items-center gap-3 rounded-md'>
				<div className='w-7 h-7'>
					<UserIcon className='h-7 w-7 text-gray-600' />
				</div>
				<div>
					<p className='text-xs'>Total Departements</p>
					<div className='font-bold px-1 text-lg'>{department.length}</div>
				</div>
			</div>
			<div className='lg:grid-cols-2 grid w-full gap-4 '>
				<div className='w-full px-5'>
					<div className='w-full p-2 px-10 bg-gray-200 rounded-md flex justify-between items-center border'>
						<p>Departments</p>
						<div>Actions</div>
					</div>
					<div>
						{department.length > 0 &&
							department.map((value) => (
								<div className='flex justify-between items-center p-2 border-b w-full px-10 '>
									<div>{value.departmentName}</div>
									<div
										className='cursor-pointer'
										onClick={() => handleDelete(value._id)}
									>
										<TrashIcon className='w-4 h-4' />
									</div>
								</div>
							))}
					</div>
				</div>
				<div className='px-5'>
					<div className='w-full p-2 bg-gray-200 rounded-md flex gap-5 items-center border'>
						Add New Department
					</div>
					<div className='flex gap-2 items-center justify-between w-full p-1'>
						<input
							type='text'
							name='departementName'
							placeholder='Departement'
							value={newDept}
							onChange={(e) => setNewDept(e.target.value)}
							className='p-2 border flex-grow rounded-md '
						/>
						<button
							className='bg-orange-800 text-white px-5 p-2 rounded-lg shadow-sm'
							onClick={() => handleAdd(newDept)}
						>
							Add
						</button>
					</div>
				</div>
			</div>
			<ToastContainer limit={1} />
		</div>
	);
}
