import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { projects } from "@/data/projects";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { ProjectCard } from "@/components/project-card";

export const Dashboard = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedCategory, setSelectedCategory] = useState<string>("all");

	const categories = [
		{ id: "all", label: "All Projects" },
		{ id: "hyperliquid", label: "Hyperliquid" },
		{ id: "hyperevm", label: "HyperEVM" },
		{ id: "hypercore", label: "HyperCore" },
	];

	const filteredProjects = useMemo(() => {
		return projects.filter((project) => {
			const matchesSearch =
				project.name
					.toLowerCase()
					.includes(searchQuery.toLowerCase()) ||
				project.description
					.toLowerCase()
					.includes(searchQuery.toLowerCase()) ||
				project.tags.some((tag) =>
					tag.toLowerCase().includes(searchQuery.toLowerCase())
				);

			const matchesCategory =
				selectedCategory === "all" ||
				project.category === selectedCategory;

			return matchesSearch && matchesCategory;
		});
	}, [searchQuery, selectedCategory]);

	return (
		<div>
			<section>
				<div className="container mx-auto px-4 py-12 md:py-16">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-foreground leading-tight animate-fade-in-up">
							<span className="gradient-text" id="hyperliquid">
								Hyperliquid
							</span>{" "}
							<span>Ecosystem Directory</span>
						</h2>
						<p
							className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up"
							style={{ animationDelay: "0.1s" }}
						>
							Discover and explore projects building on
							Hyperliquid, HyperEVM, and HyperCore
						</p>

						{/* Search Bar */}
						<div
							className="relative max-w-2xl mx-auto mb-8 animate-fade-in-up"
							style={{ animationDelay: "0.2s" }}
						>
							<MagnifyingGlassIcon className="absolute z-[1] left-5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
							<Input
								type="text"
								placeholder="Search projects, tags, or descriptions..."
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								className="pl-14 pr-6 py-6 text-lg bg-card/40 backdrop-blur-xl border-border/50 focus:border-primary rounded-2xl shadow-lg hover:shadow-xl transition-all"
							/>
						</div>

						{/* Category Filters */}
						<div
							className="flex flex-wrap justify-center gap-3 animate-fade-in-up"
							style={{ animationDelay: "0.3s" }}
						>
							{categories.map((category) => (
								<button
									key={category.id}
									onClick={() =>
										setSelectedCategory(category.id)
									}
									className={`px-6 py-3 rounded-full font-medium transition-all ${
										selectedCategory === category.id
											? "bg-primary text-primary-foreground shadow-lg shadow-primary/50"
											: "bg-card/40 backdrop-blur-xl border border-border/50 text-secondary-foreground hover:bg-primary/10 hover:border-primary/50"
									}`}
								>
									{category.label}
								</button>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Projects Grid */}
			<section className="relative z-10 py-12">
				<div className="container mx-auto px-4">
					<div className="mb-6">
						<p className="text-muted-foreground">
							{filteredProjects.length}{" "}
							{filteredProjects.length === 1
								? "project"
								: "projects"}{" "}
							found
						</p>
					</div>

					{filteredProjects.length === 0 ? (
						<div className="text-center py-20">
							<p className="text-xl text-muted-foreground">
								No projects found matching your search.
							</p>
						</div>
					) : (
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{filteredProjects.map((project) => (
								<ProjectCard
									key={project.id}
									project={project}
								/>
							))}
						</div>
					)}
				</div>
			</section>
		</div>
	);
};
