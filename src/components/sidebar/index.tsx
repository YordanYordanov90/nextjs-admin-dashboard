"use client";

import { useState } from "react";
import { Home, Users, LogOut, ChevronRight, ChevronsRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePathname } from 'next/navigation';

const menuItems = [
  { icon: Home, label: "Home", href: "/workspace" },
  { icon: Users, label: "Users", href: "/main/users" },
];

interface NavItemProps {
  icon: any;
  label: string;
  href: string;
  expanded: boolean;
  isActive: boolean;
}

const NavItem = ({ icon: Icon, label, href, expanded, isActive }: NavItemProps) => {


  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link href={href}>
            <Button
              variant="ghost"
              className={cn(
                "w-full flex items-center gap-3 p-4 my-2 rounded-full hover:bg-gray-300",
                expanded ? "justify-start" : "justify-center",
                isActive ? "bg-gray-300 hover:bg-gray-400:" : "hover:bg-gray-200"
              )}
            >
              <Icon className="w-6 h-6" />
              {expanded && (
                <span className="text-lg ml-2 transition-all duration-200">
                  {label}
                </span>
              )}
            </Button>
          </Link>
        </TooltipTrigger>
        {!expanded && <TooltipContent side="right">{label}</TooltipContent>}
      </Tooltip>
    </TooltipProvider>
  );
};

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/workspace') {
      return pathname === href || pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <div
      className={cn(
        "h-[96vh] text-black bg-white px-1 py-2 mx-auto flex flex-col justify-between",
        "rounded-3xl fixed z-50 left-4 inset-y-4 transition-all ease-in-out duration-150  shadow-2xl",
        expanded ? "w-[192px]" : "w-[65px]"
      )}
    >
      <div className="flex flex-col gap-4">
        {menuItems.map((item) => (
          <NavItem
            key={item.href}
            icon={item.icon}
            label={item.label}
            href={item.href}
            expanded={expanded}
            isActive={isActive(item.href)}
          />
        ))}
      </div>

      <div className="flex flex-col gap-4 ">
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                className={cn(
                  "flex items-center gap-3 p-3 rounded-lg hover:bg-gray-300",
                  expanded ? "justify-start" : "justify-center"
                )}
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

        <Button
          variant="ghost"
          onClick={() => setExpanded(!expanded)}
          className="self-end  rounded-full hover:bg-gray-300  transition-transform duration-200"
        >
          <ChevronsRight 
            className={cn("w-6 h-6", expanded ? "rotate-180" : "")}
          />
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
