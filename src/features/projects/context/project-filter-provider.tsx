import type { PropsWithChildren } from "react";
import { ProjectFilterContext } from "./project-filter-context";
import { useProjectFilter } from "../hooks/useProjectFilters";

export const ProjectFilterProvider = ({ children }: PropsWithChildren) => {
    const filter = useProjectFilter();
    return (
        <ProjectFilterContext.Provider value={filter}>
            {children}
        </ProjectFilterContext.Provider>
    );
};