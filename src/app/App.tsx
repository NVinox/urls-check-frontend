import { Outlet } from "react-router-dom";

import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";

function App() {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
}

export default App;
