import { BaseAnalyticsCard } from './base-analytics'

export function UserAnalytics() {
    const userData = [
      {
        name: "January",
        "Premium Users": 3,
        "Regular Users": 0,
      },
    ]
  
    const config = {
      "Premium Users": {
        label: "Premium Users",
        color: "hsl(162, 47%, 30%)",
      },
      "Regular Users": {
        label: "Regular Users",
        color: "hsl(162, 47%, 50%)",
      },
    }
  
    return (
      <BaseAnalyticsCard
        title="Users"
        data={userData}
        config={config}
        dataKeys={["Premium Users", "Regular Users"]}
      />
    )
  }