import type { FC, PropsWithChildren } from "react";
import { AppHeader } from "./app-header";
import { AppFooter } from "./app-footer";

type AppContainerProps = {} & PropsWithChildren;

export const AppContainer: FC<AppContainerProps> = ({ children }) => {
	return (
		<div className="min-h-screen flex flex-col">
			<AppHeader />
			{children}
			<AppFooter />
		</div>
	);
};
