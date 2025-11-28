import type { FC } from "react";

type NotFoundProps = {};

export const NotFound: FC<NotFoundProps> = ({}) => {
	return (
		<section className="flex flex-1 h-full items-center justify-center">
			<div className="flex flex-col gap-3 items-center justify-center">
				<img src="/dafuq.webp" className="h-80 w-70" alt="" />
				<span className="font-bold">Page not found</span>
			</div>
		</section>
	);
};
