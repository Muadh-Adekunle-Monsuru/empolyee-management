import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function NewEmployee({ setShowCreate, toSubmit }) {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		designation: 'Dentist',
		department: 'General Dentistry',
		accountStatus: 'Active',
		platformStatus: 'Accepted',
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};
	return (
		<form>
			<ToastContainer />
			<div className='grid grid-cols-6 font-semibold w-full justify-between items-center md:text-xs text-gray-900 bg-gray-50 rounded-sm lg:px-14 px-1 py-3 text-[0.4rem] '>
				<div className='flex gap-3 overflow-x-auto'>
					<div>
						<input
							name='name'
							type='text'
							placeholder='Name'
							value={formData.name}
							onChange={handleChange}
							className='py-2 border px-2 rounded-md'
						/>
						<input
							name='email'
							type='text'
							placeholder='Email'
							value={formData.email}
							onChange={handleChange}
							className='py-2 border px-2 rounded-md mt-1'
						/>
					</div>
				</div>
				<div className=' overflow-x-auto px-3'>
					<select
						name='designation'
						id='designation'
						value={formData.designation}
						onChange={handleChange}
						className='py-2 border px-1 rounded-md'
					>
						<option value='Dentist'>Dentist</option>
						<option value='Orthodontist'>Orthodontist</option>
						<option value='Surgeon'>Surgeon</option>
					</select>
				</div>
				<div className='overflow-x-auto px-3 lg:px-0'>
					<select
						name='department'
						id='department'
						value={formData.department}
						onChange={handleChange}
						className='py-2 border px-1 rounded-md'
					>
						<option value='General Dentistry'>General Dentistry</option>
						<option value='Pediatric Dentistry'>Pediatric Dentistry</option>
						<option value='Restorative Dentistry'>Restorative Dentistry</option>
						<option value='Surgery'>Surgery</option>
						<option value='Orthodonics'>Orthodonics</option>
					</select>
				</div>
				<div className=' overflow-x-auto px-3'>
					<select
						name='accountStatus'
						id='accountStatus'
						value={formData.accountStatus}
						onChange={handleChange}
						className='py-2 border  rounded-md'
					>
						<option value='Active'>Active</option>
						<option value='Inactive'>Inactive</option>
					</select>
				</div>
				<div className=' overflow-x-auto px-3'>
					<select
						name='platformStatus'
						id='platformStatus'
						onChange={handleChange}
						value={formData.platformStatus}
						className='py-2 border px-2 rounded-md'
					>
						<option value='Accepted'>Accepted</option>
						<option value='Invited'>Invited</option>
					</select>
				</div>
				<div className='overflow-x-auto'>
					<input
						value='Submit'
						className='  py-2 border w-20 text-center rounded-md bg-orange-700 text-white ml-3'
						onClick={(e) => toSubmit(e, formData)}
					/>
				</div>
			</div>
		</form>
	);
}
