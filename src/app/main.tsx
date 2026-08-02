import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppRouter } from "@/app/providers/router";

import { ErrorModal } from "@/shared/ErrorModal";

import "@/app/index.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<>
			<AppRouter />
			<ErrorModal />
		</>
	</StrictMode>,
);
