"use client";

import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type User = {
  email: string;
  createdAt: string;
  workspaces: number;
  subscriptions: number;
  notes?: string;
  status: "NEW";
}

const users: User[] = [
  {
    email: "admin@gmail.com",
    createdAt: "11/01/2025",
    workspaces: 1,
    subscriptions: 1,
    status: "NEW",
  },
  {
    email: "office@new.bg",
    createdAt: "14/02/2025",
    workspaces: 1,
    subscriptions: 2,
    notes: "View Notes",
    status: "NEW",
  },
  {
    email: "home@ddd.bg",
    createdAt: "14/01/2023",
    workspaces: 2,
    subscriptions: 1,
    notes: "View Notes",
    status: "NEW",
  },
];

export default function UserDashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [perPage, setPerPage] = useState("10");

  return (
    <div className="p-6 max-w-[1440px] mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Users</h1>

      <div className="flex items-center gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search by email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-10  border-gray-200"
          />
        </div>
        <Input
          type="date"
          className="w-[180px] h-10 border-gray-200"
          placeholder="From date"
        />
        <Input
          type="date"
          className="w-[180px] h-10 border-gray-200"
          placeholder="To date"
        />
      </div>

      <div className="rounded-md border border-gray-200">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="font-medium">Email</TableHead>
              <TableHead className="font-medium">Created At</TableHead>
              <TableHead className="font-medium">Workspaces</TableHead>
              <TableHead className="font-medium">Subscriptions</TableHead>
              <TableHead className="font-medium">Admin Notes</TableHead>
              <TableHead className="font-medium">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.email} className="hover:bg-gray-50">
                <TableCell className="font-medium">{user.email}</TableCell>
                <TableCell>{user.createdAt}</TableCell>
                <TableCell>{user.workspaces}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="h-8 px-2 text-gray-600 hover:bg-gray-100"
                      >
                        {user.subscriptions} Subscription(s)
                        <ChevronDown className="h-4 w-4 ml-1" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Manage Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="h-8 bg-black text-white hover:bg-black/90"
                    >
                      Add Note
                    </Button>
                    {user.notes && (
                      <Button
                        variant="link"
                        size="sm"
                        className="h-8 text-gray-600 hover:text-gray-900"
                      >
                        {user.notes}
                      </Button>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 border-gray-200"
                      >
                        <span className="bg-black text-white text-xs px-2 py-0.5 rounded mr-2">
                          {user.status}
                        </span>
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Active</DropdownMenuItem>
                      <DropdownMenuItem>Inactive</DropdownMenuItem>
                      <DropdownMenuItem>Suspended</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between mt-4">
        <Select value={perPage} onValueChange={setPerPage}>
          <SelectTrigger className="w-[120px] h-10 border-gray-200">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10">10 per page</SelectItem>
            <SelectItem value="20">20 per page</SelectItem>
            <SelectItem value="50">50 per page</SelectItem>
          </SelectContent>
        </Select>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="h-10 border-gray-200 text-gray-600"
            disabled
          >
            Previous
          </Button>
          <span className="text-sm text-gray-600">Page 1 of 1</span>
          <Button
            variant="outline"
            className="h-10 border-gray-200 text-gray-600"
            disabled
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
