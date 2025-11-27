import type { PropsWithChildren } from "react";
import { useProjectFilter } from "../hooks/useProjectFilters";
import { ProjectFilterContext } from "./project-filter-context";

export const ProjectFilterProvider = ({ children }: PropsWithChildren) => {
    const filter = useProjectFilter();
    return (
        <ProjectFilterContext.Provider value={filter}>
            {children}
        </ProjectFilterContext.Provider>
    );
};