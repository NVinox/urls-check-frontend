import { createBrowserRouter } from "react-router-dom";

import App from "@/app/App";

import { Job } from "@/pages/Job";
import { Home } from "@/pages/Home";
import { CreateJob } from "@/pages/CreateJob";
import { NotFound } from "@/pages/NotFound";

import {
	CREATE_JOB_ROUTE,
	HOME_ROUTE,
	JOB_ROUTE,
} from "@/shared/constants/constants.ts";

export const routeConfig = createBrowserRouter([
	{
		path: HOME_ROUTE,
		element: <App />,
		children: [
			{ path: "", element: <Home /> },
			{ path: CREATE_JOB_ROUTE, element: <CreateJob /> },
			{ path: JOB_ROUTE, element: <Job /> },
			{ path: "*", element: <NotFound /> },
		],
	},
]);
