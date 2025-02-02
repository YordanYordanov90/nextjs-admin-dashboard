"use client"

import { useState } from "react"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChartContainer } from "@/components/ui/chart"

const timeFilters = ["30 days", "60 days", "90 days", "All time"]

const userData = [
  {
    name: "January",
    "Premium Users": 3,
    "Regular Users": 0,
  },
]

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

export default function AnalyticsDashboard() {
  const [selectedUserFilter, setSelectedUserFilter] = useState("30 days")
  const [selectedWorkspaceFilter, setSelectedWorkspaceFilter] = useState("30 days")

  return (
    <div className="grid gap-6 p-6 md:grid-cols-2 py-20">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-8">
          <CardTitle className="text-base font-medium">Users</CardTitle>
          <div className="flex items-center gap-2">
            {timeFilters.map((filter) => (
              <Button
                key={filter}
                variant={selectedUserFilter === filter ? "secondary" : "ghost"}
                className="h-8 text-xs"
                onClick={() => setSelectedUserFilter(filter)}
              >
                {filter}
              </Button>
            ))}
          </div>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              "Premium Users": {
                label: "Premium Users",
                color: "hsl(162, 47%, 30%)",
              },
              "Regular Users": {
                label: "Regular Users",
                color: "hsl(162, 47%, 50%)",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={userData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="Premium Users" fill="hsl(162, 47%, 30%)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="Regular Users" fill="hsl(162, 47%, 50%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-8">
          <CardTitle className="text-base font-medium">Workspace Analytics</CardTitle>
          <div className="flex items-center gap-2">
            {timeFilters.map((filter) => (
              <Button
                key={filter}
                variant={selectedWorkspaceFilter === filter ? "secondary" : "ghost"}
                className="h-8 text-xs"
                onClick={() => setSelectedWorkspaceFilter(filter)}
              >
                {filter}
              </Button>
            ))}
          </div>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              "Active Workspaces": {
                label: "Active Workspaces",
                color: "hsl(162, 47%, 30%)",
              },
              "Total Workspaces": {
                label: "Total Workspaces",
                color: "hsl(162, 47%, 50%)",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={workspaceData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="Active Workspaces" fill="hsl(162, 47%, 30%)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="Total Workspaces" fill="hsl(162, 47%, 50%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}

