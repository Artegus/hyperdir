import { useContext } from "react";
import { ProjectFilterContext } from "../context/project-filter-context";

export const useProjectFilterContext = () => {
    const context = useContext(ProjectFilterContext);
    if (!context) throw new Error("useProjectFilterContext must be used within ProjectFilterProvider");
    return context;
};