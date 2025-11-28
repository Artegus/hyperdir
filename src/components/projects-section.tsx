import type { FC } from 'react'
import { useProjectFilterContext } from '../hooks/useProjectFilerContext';
import { ProjectCard } from './project-card';

type ProjectsSectionProps = {

}

export const ProjectsSection: FC<ProjectsSectionProps> = ({ }) => {
    const filteredProjects = useProjectFilterContext().filteredProjects;

    return <section className="py-16">
        <div className="container mx-auto px-6">
            <div className="mb-8">
                <p className="text-sm text-muted-foreground">
                    {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}
                </p>
            </div>

            {filteredProjects.length === 0 ? (
                <div className="text-center py-32">
                    <p className="text-sm text-muted-foreground">
                        No projects found
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            )}
        </div>
    </section>
}
