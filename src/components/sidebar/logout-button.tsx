"use client";

import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

type LogoutButtonProps = {
  expanded: boolean;
}

const LogoutButton = ({ expanded }: LogoutButtonProps) => {
  const handleLogout = async () => {
    try {
      await fetch("/api/logout", { method: "POST" });
      window.location.href = "/login";
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            className={cn(
              "flex items-center gap-3 p-3 rounded-lg hover:bg-gray-300",
              expanded ? "justify-start" : "justify-center"
            )}
            onClick={handleLogout}
          >
            <LogOut className="w-6 h-6" />
            {expanded && (
              <span className="text-lg ml-2 transition-all duration-200">
                Logout
              </span>
            )}
          </Button>
        </TooltipTrigger>
        {!expanded && <TooltipContent side="right">Logout</TooltipContent>}
      </Tooltip>
    </TooltipProvider>
  );
};

export default LogoutButton;
