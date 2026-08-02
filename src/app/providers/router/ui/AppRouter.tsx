import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { routeConfig } from "@/app/providers/router";

export default function AppRouter() {
	return (
		<HelmetProvider>
			<RouterProvider router={routeConfig} />
		</HelmetProvider>
	);
}
