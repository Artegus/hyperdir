import { BrowserRouter, Route, Routes } from "react-router";
import { Dashboard } from "./pages/dashboard";
import { AppContainer } from "./components/app-container";
import { NotFound } from "./pages/not-found";
import { ThemeProvider } from "./components/theme-provider";

function App() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<BrowserRouter>
				<AppContainer>
					<Routes>
						<Route path="/" element={<Dashboard />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</AppContainer>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
