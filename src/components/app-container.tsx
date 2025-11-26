import type { FC, PropsWithChildren } from "react";
import { HlSymbolDarkGreen } from "./icons/hl-symbol-dark-green";
import { NavLink } from "react-router";

type AppContainerProps = {} & PropsWithChildren;

export const AppContainer: FC<AppContainerProps> = ({ children }) => {
	return (
		<div className="min-h-screen flex flex-col">
			<header>
				<div className="container mx-auto px-4 py-6">
					<div className="flex items-center justify-between bg-white/95 backdrop-blur-3xl border-border/50 rounded-full px-6 py-3 shadow-lg">
						<NavLink className="flex items-center gap-3" to="/">
							<HlSymbolDarkGreen size={24} />
							<h1 className="text-lg italic text-black hidden sm:block">
								HyperDir
							</h1>
						</NavLink>
						<nav className="hidden md:flex gap-8 items-center text-black">
							<a
								href="#"
								className="hover:text-primary transition-colors"
							>
								Resources
							</a>
						</nav>
					</div>
				</div>
			</header>
			{children}
			<footer className="border-t border-border/50 bg-card/20 backdrop-blur-xl mt-20 w-full">
				<div className="container mx-auto px-4 py-8">
					<div className="text-center text-muted-foreground">
						<p>Hyperliquid Ecosystem Directory</p>
					</div>
				</div>
			</footer>
		</div>
	);
};
