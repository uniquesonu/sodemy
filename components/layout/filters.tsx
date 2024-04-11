import React from 'react'
import {ArrowDownNarrowWide} from "lucide-react"

   
  import { Button } from "@/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import FilterAccordian from './filterAccordian'

const Filters = () => {
  return (
    <div className=''>
        <div className='flex gap-4'>
            <Button variant={"outline"}>Filter</Button>
            <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className='mr-4'>
            Most Popular <ArrowDownNarrowWide className='ml-4'/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <span>Most Popular</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>High Rated </span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Newest</span>
          </DropdownMenuItem>
          </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
        </div>
        <FilterAccordian />
    </div>
  )
}

export default Filters