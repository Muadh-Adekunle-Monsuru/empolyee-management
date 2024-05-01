import React from 'react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
export default function Register({ onSubmit }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	return (
		<div className='text-sm h-full w-full flex flex-col items-center justify-evenly'>
			<div>
				<label htmlFor=''>Username:</label>
				<input
					name='username'
					placeholder='username'
					type='text'
					value={name}
					onChange={(e) => setName(e.target.value)}
					className='mt-1 block py-2 p-2 rounded-lg  bg-slate-200/50 shadow-sm'
				/>
			</div>
			<div>
				<label htmlFor=''>Email:</label>
				<input
					name='Email'
					placeholder='email'
					type='text'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className='mt-1 block py-2 p-2 rounded-lg  bg-slate-200/50 shadow-sm'
				/>
			</div>
			<div>
				<label>Password:</label>
				<input
					name='Password'
					placeholder='password'
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className='mt-1 block py-2 p-2 rounded-lg  bg-slate-200/50 shadow-sm'
				/>
			</div>
			<div className='w-1/2'>
				<button
					className='mt-1 px-5 bg-slate-200 rounded-md w-full p-1 shadow-sm'
					onClick={() => onSubmit(name, email, password)}
				>
					register
				</button>
			</div>
		</div>
	);
}
