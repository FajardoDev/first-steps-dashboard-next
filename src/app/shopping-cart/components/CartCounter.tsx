"use client";

import { useContador } from "@/hooks";

interface Props {
	valorIncial?: number;
}

export const CartCounter = ({ valorIncial }: Props) => {
	const { counter, incrementar, decrementar, reset } =
		useContador(valorIncial);

	return (
		<>
			<span className="text-5xl font-bold">{counter}</span>
			<div className="flex space-x-2">
				<button
					value={counter}
					onClick={() => incrementar(2)}
					type="button"
					className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition ease-linear duration-150 w-[100px]"
				>
					+2
				</button>
				<button
					onClick={reset}
					type="button"
					className={`flex items-center justify-center p-2 rounded-xl bg-red-900 text-white  transition ease-linear duration-150 w-[100px] ${
						counter === 0 ? "cursor-not-allowed opacity-50" : "hover:bg-gray-600"
					}`}
					disabled={counter === 0}
				>
					Reset
				</button>
				<button
					onClick={() => decrementar(1)}
					value={counter}
					type="button"
					className={`flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white transition ease-linear duration-150 w-[100px] ${
						counter === 0 ? "cursor-not-allowed opacity-50" : "hover:bg-gray-600"
					}`}
					disabled={counter === 0}
				>
					-1
				</button>
			</div>
		</>
	);
};
