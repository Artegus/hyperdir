import { ProjectFilterProvider } from "../context/project-filter-provider";
import { DashboardHeader } from "../components/dashboard-header";
import { ProjectsSection } from "../components/projects-section";


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
