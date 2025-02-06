import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu"
import { ChevronDown } from "lucide-react"
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'

type Status = "NEW" | "Marketing" | "Watched" | "Dangerous" | "Terminate"

const StatusCell = ({ status }: { status: Status }) => {
  const getStatusStyle = (status: Status) => {
    switch (status) {
      case "NEW":
        return "bg-black text-white border-black"
      case "Dangerous":
        return "bg-red-500 text-white border-red-500"
      default:
        return "bg-white text-gray-900"
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="sm"
          className=" border-gray-200 flex items-center justify-between rounded-md  bg-white transition duration-150 w-full font-normal"
        >
          <Badge 
            variant="outline" 
            className={`mr-2 font-normal ${getStatusStyle(status)}`}
          >
            {status}
          </Badge>
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="z-50 w-[200px] bg-white rounded-md shadow-2xl border border-gray-200 overflow-hidden"
      >
        <div className="bg-white">
          <DropdownMenuItem className="py-2 px-3 focus:bg-gray-50 focus:outline-none cursor-pointer">
            <Badge 
              variant="outline" 
              className="w-full justify-center bg-black text-white border-black"
            >
              NEW
            </Badge>
          </DropdownMenuItem>
          <DropdownMenuItem className="py-2 px-3 focus:bg-gray-50 focus:outline-none cursor-pointer">
            <span className="w-full text-gray-900">Marketing</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="py-2 px-3 focus:bg-gray-50 focus:outline-none cursor-pointer">
            <span className="w-full text-gray-900">Watched</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="py-2 px-3 focus:bg-gray-50 focus:outline-none cursor-pointer">
            <Badge 
              variant="outline" 
              className="w-full justify-center bg-red-500 text-white border-red-500"
            >
              Dangerous
            </Badge>
          </DropdownMenuItem>
          <DropdownMenuItem className="py-2 px-3 focus:bg-gray-50 focus:outline-none cursor-pointer">
            <span className="w-full text-gray-900">Terminate</span>
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default StatusCell