import React from 'react';
import { StopCircleIcon } from '@heroicons/react/24/outline';
export default function TableHeader() {
	return (
		<div className='grid grid-cols-6 font-semibold w-full justify-between items-center text-xs text-gray-900 bg-slate-100 rounded-sm px-14 py-2 mt-2'>
			<div className='flex gap-3'>
				<div className='w-4 h-4 border-2 rounded-full'></div>
				<div>Employee Name</div>
			</div>
			<div>Designation</div>
			<div>Department</div>
			<div>Account Status</div>
			<div>Platform Status</div>
			<div>Actions</div>
		</div>
	);
}
