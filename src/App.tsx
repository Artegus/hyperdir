import { BrowserRouter, Route, Routes } from "react-router";
import { Dashboard } from "./pages/dashboard";
import { AppContainer } from "./components/app-container";
import { NotFound } from "./pages/not-found";

function App() {
	return (
		<BrowserRouter>
			<AppContainer>
				<Routes>
					<Route path="/" element={<Dashboard />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</AppContainer>
		</BrowserRouter>
	);
}

export default App;
