"use client"

import { useState } from "react"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChartContainer } from "@/components/ui/chart"

interface DataConfig {
  [key: string]: {
    label: string
    color: string
  }
}

interface BaseAnalyticsCardProps {
  title: string
  data: any[]
  config: DataConfig
  dataKeys: string[]
}

const timeFilters = ["30 days", "60 days", "90 days", "All time"]

export function BaseAnalyticsCard({ title, data, config, dataKeys }: BaseAnalyticsCardProps) {
  const [selectedFilter, setSelectedFilter] = useState("30 days")

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-8">
        <CardTitle className="text-base font-medium">{title}</CardTitle>
        <div className="flex items-center gap-2">
          {timeFilters.map((filter) => (
            <Button
              key={filter}
              variant={selectedFilter === filter ? "secondary" : "ghost"}
              className="h-8 text-xs"
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </Button>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={config} className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              {dataKeys.map((key) => (
                <Bar
                  key={key}
                  dataKey={key}
                  fill={config[key].color}
                  radius={[4, 4, 0, 0]}
                />
              ))}
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}