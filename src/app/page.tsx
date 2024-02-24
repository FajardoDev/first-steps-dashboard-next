import { redirect } from "next/navigation";

export default function Home() {
	redirect("/dashboard/main");
	// redirect("/dashboard/counter");

	return <></>;
}
