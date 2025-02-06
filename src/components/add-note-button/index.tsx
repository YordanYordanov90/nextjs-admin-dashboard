import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";


export default function DialogCloseButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size={"sm"}
          className="px-4 py-1 rounded-2xl bg-black text-white hover:bg-black/80 hover:text-white"
        >
          Add note
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add Note</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center gap-4">
          <div className="w-full">
            <Input id="link" className="px-4 py-1 rounded-2xl " />
          </div>
        </div>
        <DialogFooter className="justify-end">
          <Button type="submit" size="sm" className="px-3  ">
            Add note
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
