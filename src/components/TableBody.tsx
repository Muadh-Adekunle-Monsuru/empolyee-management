import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TrashIcon, PencilSquareIcon } from '@heroicons/react/24/outline';
export default function TableBody({ data, handleDelete, handleUpdate }) {
	const [employees, setEmployees] = useState([]);
	return (
		<div>
			{data.length > 0 &&
				data.map((data, index) => (
					<div
						key={index}
						className='grid grid-cols-6 w-full justify-between items-center text-xs text-gray-900 rounded-sm px-14 py-2 mt-1 border-b'
					>
						<div className='flex gap-3 overflow-clip'>
							<div className='w-7 border rounded-full'>
								<img
									src={`https://api.dicebear.com/8.x/avataaars/png?seed=${data.name}`}
									alt='avatar_image'
								/>
							</div>
							<div>
								<div>{data.name}</div>
								<div className='text-[0.65rem] text-gray-500'>{data.email}</div>
							</div>
						</div>
						<div>{data.designation}</div>
						<div>{data.department}</div>
						<div>{data.accountStatus}</div>
						<div>
							{data.platformStatus == 'Accepted' ? (
								<p className='bg-green-100 p-1 rounded-lg w-16 font-semibold'>
									Accepted
								</p>
							) : (
								<p className='bg-gray-200 p-1 rounded-lg w-16 font-semibold'>
									Invited
								</p>
							)}
						</div>
						<div className='flex gap-3'>
							<div
								className='cursor-pointer'
								onClick={() => handleUpdate(data)}
							>
								<PencilSquareIcon className='w-4 h-4' />
							</div>
							<div
								className='cursor-pointer'
								onClick={() => handleDelete(data._id)}
							>
								<TrashIcon className='w-4 h-4' />
							</div>
						</div>
					</div>
				))}
		</div>
	);
}
