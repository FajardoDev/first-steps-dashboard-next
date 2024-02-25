import Link from "next/link";
import { SimplePokemon } from "..";
import Image from "next/image";
import { IoHeartOutline } from "react-icons/io5";

interface Props {
	pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
	const { name, id } = pokemon;

	return (
		<>
			<div
				className={`flex items-center justify-center ${
					name.length > 0 && "pb-2"
				}`}
			>
				<div className="relative flex w-full max-w-[20rem] flex-row rounded-md bg-white bg-clip-border text-gray-700 shadow-md shadow-black">
					<div className="relative m-0 w-1/3 shrink-0 overflow-hidden rounded-md rounded-r-none bg-white bg-clip-border text-gray-700 flex">
						<Image
							key={id}
							src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
							width={100}
							height={100}
							alt={name}
							priority={false}
						/>
					</div>

					<div className="p-5">
						<h6 className="mb-2 block font-sans text-xl font-semibold uppercase antialiased bg-clip-text text-transparent bg-gradient-to-t from-yellow-500 to-pink-500">
							{name}
						</h6>

						<Link href="/dashboard/main">
							<div className="mb-4 text-red-700 antialiased flex items-center space-x-2">
								<IoHeartOutline />

								<p className="italic">No es favorito</p>
							</div>
						</Link>

						<Link className="inline-block" href={`/dashboard/pokemon/${name}`}>
							<button
								className="flex select-none items-center gap-2 rounded-lg py-2 px-6 text-center align-middle font-sans text-xs font-bold text-black transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:translate-x-1 duration-150 bg-fuchsia-400/30 hover:text-black"
								type="button"
							>
								Saber más
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="2"
									stroke="currentColor"
									aria-hidden="true"
									className="h-4 w-4"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
									></path>
								</svg>
							</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};
