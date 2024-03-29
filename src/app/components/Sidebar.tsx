import Image from "next/image";
import {
	IoBalloon,
	IoBrowsersOutline,
	IoCalculator,
	IoLogoReact,
} from "react-icons/io5";
import { SidebarMenuItems } from ".";

const menuItems = [
	{
		path: "/dashboard/main",
		icon: <IoBrowsersOutline size={30} />,
		title: "Dashboard",
		subTitle: "Visualización",
	},
	{
		path: "/dashboard/counter",
		icon: <IoCalculator size={30} />,
		title: "Contador",
		subTitle: "Contador Lado del Cliente ",
	},
	{
		path: "/dashboard/pokemons",
		icon: <IoBalloon size={30} />,
		title: "Pokemons",
		subTitle: "Generación Estática",
	},
];

export const Sidebar = () => {
	return (
		<div className="md:flex md:min-h-screen md:w-[27%]">
			<div
				id="menu"
				// style={{ width: "400px" }}
				className="bg-gray-900 z-10 text-slate-300"
			>
				<div id="logo" className="my-4 px-6">
					<h1 className="flex items-center space-x-1 text-base md:text-2xl font-bold text-white">
						<IoLogoReact />
						<span>Dash</span>
						<span className="text-blue-500">F</span>.
					</h1>
					<p className="text-slate-500 text-sm">
						Gestiona tus acciones y actividades
					</p>
				</div>
				<div id="profile" className="px-6 py-10">
					<p className="text-slate-500">
						Bienvenido de nuevo,
					</p>
					<a
						href="#"
						className="inline-flex space-x-2 items-center"
					>
						<span>
							<Image
								src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
								width={50}
								height={50}
								alt="Picture of the author"
								className="rounded-full w-8 h-8"
							/>
						</span>
						<span className="text-sm md:text-base font-bold">
							Ariel Fajardo
						</span>
					</a>
				</div>
				<div id="nav" className="w-full px-6 space-y-1">
					{menuItems.map((item) => (
						<SidebarMenuItems key={item.path} {...item} />
					))}

					{/* <a
					href="#"
					className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150"
				>
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="w-6 h-6 text-blue-600"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
							/>
						</svg>
					</div>
					<div className="flex flex-col">
						<span className="text-base text-slate-300 font-bold leading-5">
							Counter
						</span>
						<span className="text-sm text-slate-500 hidden md:block">
							Estado Local
						</span>
					</div>
				</a> */}
				</div>
			</div>
		</div>
	);
};
