import { ProjectFilterProvider } from "../features/projects/context/project-filter-provider";
import { DashboardHeader } from "../features/projects/components/dashboard-header";
import { ProjectsSection } from "../features/projects/components/projects-section";


export const Dashboard = () => {
	return (
		<ProjectFilterProvider>
			<div>
				<DashboardHeader />
				<ProjectsSection />
			</div>
		</ProjectFilterProvider>
	);
};
