import Sidebar from '@/components/Sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className='bg-white flex h-screen flex-col md:flex-row md:overflow-hidden'>
			<div className='w-full flex-none md:w-40'>
				<Sidebar />
			</div>
			<div className='flex-grow p-6 md:overflow-y-auto md:p-12'>{children}</div>
		</div>
	);
}