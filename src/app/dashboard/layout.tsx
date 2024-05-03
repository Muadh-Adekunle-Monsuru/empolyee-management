import Sidebar from '@/components/Sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className='bg-white flex  flex-col md:flex-row md:overflow-hidden h-full'>
			<div className='w-full flex-none md:w-40'>
				<Sidebar />
			</div>
			<div className='flex-grow p-2 md:overflow-y-auto md:p-2'>{children}</div>
		</div>
	);
}
