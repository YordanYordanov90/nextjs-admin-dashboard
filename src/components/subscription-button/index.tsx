import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import React from "react";

type SubscriptionPlan = {
  workspaceName: string;
  planType: string;
  interval: string;
  description: string;
  dateRange: string;
};

const dummySubscriptions: SubscriptionPlan[] = [
  {
    workspaceName: "3Web Workspace #1",
    planType: "FREE",
    interval: "month",
    description: "The free plan.",
    dateRange: "18/01/2025 - 18/02/2025",
  },
];

const SubscriptionButton = ({ subscriptions }: { subscriptions: number }) => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 px-3 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors font-medium"
          >
            {subscriptions} Subscription(s)
            <ChevronDown className="h-4 w-4 ml-1 transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[300px] p-2">
          {dummySubscriptions.map((plan, index) => (
            <div
              key={index}
              className="p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
            >
              <div className="font-medium text-gray-900">
                {plan.workspaceName}
              </div>
              <div className="flex items-center gap-1 mt-1">
                <span className="text-sm font-medium text-green-600">
                  {plan.planType}
                </span>
                <span className="text-sm text-gray-500">•</span>
                <span className="text-sm text-gray-500">{plan.interval}</span>
              </div>
              <div className="text-sm text-gray-500 mt-1">
                {plan.description}
              </div>
              <div className="text-sm text-gray-400 mt-1">{plan.dateRange}</div>
            </div>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default SubscriptionButton;
