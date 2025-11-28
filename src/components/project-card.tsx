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
		<Card className="p-8 bg-card hover:bg-accent/50 transition-all duration-300 border-0 rounded-none group">
			<div className="space-y-6">
				<div className="space-y-3">
					<div className="flex flex-row items-center justify-between">
						<h3 className="text-xl font-medium text-foreground tracking-tight">
							{project.name}
						</h3>
						<div className="flex gap-3">
							{project.website && (
								<a
									href={project.website}
									target="_blank"
									rel="noopener noreferrer"
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									<GlobeIcon className="h-4 w-4" />
								</a>
							)}
							{project.twitter && (
								<a
									href={project.twitter}
									target="_blank"
									rel="noopener noreferrer"
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									<XLogoIcon className="h-4 w-4" />
								</a>
							)}
						</div>
					</div>
					<span className="text-xs font-medium text-muted-foreground tracking-wider uppercase">
						{project.category}
					</span>
				</div>

				<p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
					{project.description}
				</p>

				<div className="flex flex-wrap gap-1.5">
					{project.tags.slice(0, 4).map((tag) => (
						<span
							key={tag}
							className="text-xs px-2 py-1 rounded-md bg-accent text-muted-foreground font-medium"
						>
							{tag}
						</span>
					))}
					{project.tags.length > 4 && (
						<span className="text-xs px-2 py-1 text-muted-foreground font-medium">
							+{project.tags.length - 4}
						</span>
					)}
				</div>
			</div>
		</Card>
	);
};
