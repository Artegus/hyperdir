import { createContext } from "react";
import { useProjectFilter } from "../hooks/useProjectFilters";

type ProjectFilterContextType = ReturnType<typeof useProjectFilter>;

export const ProjectFilterContext = createContext<ProjectFilterContextType | undefined>(undefined);