import {
	PokemonsGrid,
	PokemonsResponse,
	SimplePokemon,
} from "@/app/pokemons";

const getPokemons = async (
	limit = 20,
	offset = 0,
): Promise<SimplePokemon[]> => {
	const data: PokemonsResponse = await fetch(
		`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
	).then((rep): Promise<any> => rep.json());

	// Construyendo el obj
	const pokemons = data.results.map((pokemon) => ({
		id: pokemon.url.split("/").at(-2)!,
		name: pokemon.name,
	}));

	return pokemons;
};

export default async function PokemonsPage() {
	const pokemons = await getPokemons(153);

	return (
		<>
			{/* <div>{JSON.stringify(pokemons)}</div> */}
			<div className="flex flex-col">
				<span className="text-4xl pl-20 mb-4 bg-clip-text text-transparent bg-gradient-to-t from-red-500 to-green-500 py-4">
					Listado de Pokémons <small>Estado Estático</small>
				</span>

				<PokemonsGrid pokemons={pokemons} />
			</div>
		</>
	);
}

// const getPokemons = async (
// 	limit = 20,
// 	offset = 0,
// ): Promise<SimplePokemon> => {
// 	const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
// 	const rep = await fetch(url);
// 	const data: PokemonsResponse = await rep.json();

// 	// Construyendo el obj
// 	const pokemons = data.results.map(
// 		(pokemon): { id: string; name: string } => ({
// 			id: pokemon.url.split("/").at(-2)!,
// 			name: pokemon.name,
// 		}),
// 	);

// 	return pokemons;
// };
