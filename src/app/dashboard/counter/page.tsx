// prc lrc

import { CartCounter } from "@/app/shopping-cart";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Shopping Cart",
	description: "Un simple contador en next",
};

export default function CounterPage() {
	return (
		<div className="text-slate-200 flex flex-col items-center justify-center w-full h-full space-y-2">
			<span>Productos en el carrito de compras</span>

			<CartCounter valorIncial={0} />
		</div>
	);
}
