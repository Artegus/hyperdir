import type { FC } from "react";
import type { Project } from "../types/project";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { GlobeIcon, XLogoIcon } from "@phosphor-icons/react";

type ProjectCardProps = {
	project: Project;
};

const categoryColors = {
	hyperliquid: "bg-primary/10 text-primary border-primary/20",
	hyperevm: "bg-success/10 text-success border-success/20",
	hypercore: "bg-chart-4/10 text-chart-4 border-chart-4/20",
};

export const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
	return (
		<Card className="flex flex-col h-60 p-6 hover:border-primary/50 transition-all duration-300 bg-card/40 backdrop-blur-xl border-border/50 group hover:shadow-xl hover:shadow-primary/10">
			<div className="flex items-start justify-between mb-4">
				<div className="flex-1">
					<h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
						{project.name}
					</h3>
					<Badge className={categoryColors[project.category]}>
						{project.category}
					</Badge>
				</div>
				<div className="flex gap-2">
					{project.website && (
						<a
							href={project.website}
							target="_blank"
							rel="noopener noreferrer"
							className="p-2 hover:bg-primary/10 rounded-md transition-colors group/icon"
						>
							<GlobeIcon className="h-4 w-4 text-muted-foreground group-hover/icon:text-primary" />
						</a>
					)}
					{project.twitter && (
						<a
							href={project.twitter}
							target="_blank"
							rel="noopener noreferrer"
							className="p-2 hover:bg-primary/10 rounded-md transition-colors group/icon"
						>
							<XLogoIcon className="h-4 w-4 text-muted-foreground group-hover/icon:text-primary" />
						</a>
					)}
				</div>
			</div>

			<p className="flex-1 text-muted-foreground mb-4 line-clamp-3">
				{project.description}
			</p>

			<div className="flex flex-wrap gap-2">
				{project.tags.map((tag) => (
					<span
						key={tag}
						className="text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground"
					>
						{tag}
					</span>
				))}
			</div>
		</Card>
	);
};
