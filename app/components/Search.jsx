import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Search = () => {
    return (
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="search" placeholder="Search for a city" />
          <Button type="submit">Submit</Button>
        </div>
      )
}

export default Search