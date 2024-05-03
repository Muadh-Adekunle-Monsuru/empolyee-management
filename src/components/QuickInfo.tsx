import React from 'react';
import {
	UserIcon,
	CheckCircleIcon,
	CheckBadgeIcon,
} from '@heroicons/react/24/outline';
export default function QuickInfo({ data }) {
	const active = data.filter((data) => data.accountStatus == 'Active');
	const accepted = data.filter((data) => data.platformStatus == 'Accepted');
	return (
		<div className='w-full grid lg:flex justify-between items-center gap-3 '>
			<div className='px-3 py-1 border shadow-sm w-44 flex items-center gap-3 rounded-md'>
				<div className='w-7 h-7'>
					<UserIcon className='h-7 w-7 text-gray-600' />
				</div>
				<div>
					<p className='text-xs'>Total Employee</p>
					<div className='font-bold px-1 text-lg'>{data.length}</div>
				</div>
			</div>
			<div className='px-3 py-1 border shadow-sm w-44 flex items-center gap-3 rounded-md'>
				<div>
					<CheckCircleIcon className='h-7 w-7 text-gray-600' />
				</div>
				<div>
					<p className='text-xs'>Active Employee</p>
					<div className='font-bold px-1 text-lg'>{active.length}</div>
				</div>
			</div>
			<div className='px-3 py-1 border shadow-sm w-44 lg:w-56 flex items-center gap-3 rounded-md'>
				<div>
					<CheckBadgeIcon className='h-7 w-7 text-gray-600' />
				</div>
				<div>
					<p className='text-xs'>Accepted Platform Status</p>
					<div className='font-bold px-1 text-lg'>{accepted.length}</div>
				</div>
			</div>
		</div>
	);
}
