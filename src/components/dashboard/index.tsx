import { UserAnalytics } from './analytics/user-analytics';
import { WorkspaceAnalytics } from './analytics/workspace-analytics';


export default function AnalyticsDashboard() {
  return (
    <div className="grid gap-6 p-6 md:grid-cols-2 py-20 max-w-[1440px] w-full mx-auto">
      <UserAnalytics />
      <WorkspaceAnalytics />
    </div>
  )
}