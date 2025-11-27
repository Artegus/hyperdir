import type { FC } from 'react'
import { useProjectFilterContext } from '../hooks/useProjectFilerContext';
import { ProjectCard } from './project-card';

type ProjectsSectionProps = {

}

export const ProjectsSection: FC<ProjectsSectionProps> = ({ }) => {
    const filteredProjects = useProjectFilterContext().filteredProjects;

    return <section className="relative z-10 py-12">
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
}
