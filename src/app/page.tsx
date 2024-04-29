import Image from 'next/image';

export default function Home() {
	return (
		<main className='flex min-h-screen items-center justify-between'>
			<div className='w-full h-screen bg-gradient-image bg-cover flex lg:justify-end justify-center items-center'>
				<header className='absolute top-5 left-5 text-[#023047]'>
					<div className='uppercase font-bold select-none text-4xl  '>
						Apollonia <div className='text-[#bc6c25]'>Dentals</div>
					</div>
				</header>
				<div className='lg:h-full h-1/2 w-3/4 lg:w-1/4 rounded-lg backdrop-blur-xl bg-slate-200/40 shadow-md'></div>
			</div>
		</main>
	);
}
