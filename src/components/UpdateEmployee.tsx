import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function UpdateEmployee({ toSubmit, formData, setFormData }) {
	// const [formyData, setFormData] = useState({
	// 	name: '',
	// 	email: '',
	// 	designation: 'Dentist',
	// 	department: 'General Dentistry',
	// 	accountStatus: 'Active',
	// 	platformStatus: 'Accepted',
	// });
	// const handleSubmit = async (e) => {
	// 	e.preventDefault();

	// 	try {
	// 		const response = await axios
	// 			.post('http://localhost:8080/add', formData)
	// 			.then((response) => {
	// 				setShowCreate(false);
	// 			});
	// 		// console.log(response.data); // Log the response from the server
	// 	} catch (error) {
	// 		console.error('Error:', error);
	// 	}
	// };

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
			<div className='grid grid-cols-6 font-semibold w-full justify-between items-center text-xs text-gray-900 bg-gray-50 rounded-sm px-14 py-3 '>
				<div className='flex gap-3'>
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
				<div>
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
				<div>
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
				<div>
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
				<div>
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
				<input
					value='Update'
					className='py-2 border w-20 text-center rounded-md bg-orange-500 text-white ml-3'
					onClick={(e) => toSubmit(e, formData)}
				/>
			</div>
		</form>
	);
}
