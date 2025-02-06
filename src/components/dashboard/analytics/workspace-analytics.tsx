import { BaseAnalyticsCard } from './base-analytics'

export function WorkspaceAnalytics() {
    const workspaceData = [
      {
        name: "17/01/2025",
        "Active Workspaces": 12,
        "Total Workspaces": 15,
      },
      {
        name: "18/01/2025",
        "Active Workspaces": 14,
        "Total Workspaces": 18,
      },
      {
        name: "31/01/2025",
        "Active Workspaces": 16,
        "Total Workspaces": 20,
      },
    ]
  
    const config = {
      "Active Workspaces": {
        label: "Active Workspaces",
        color: "hsl(162, 47%, 30%)",
      },
      "Total Workspaces": {
        label: "Total Workspaces",
        color: "hsl(162, 47%, 50%)",
      },
    }
  
    return (
      <BaseAnalyticsCard
        title="Workspace Analytics"
        data={workspaceData}
        config={config}
        dataKeys={["Active Workspaces", "Total Workspaces"]}
      />
    )
  }