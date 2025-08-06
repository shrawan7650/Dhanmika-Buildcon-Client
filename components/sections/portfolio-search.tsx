"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, X } from "lucide-react"
import { useDispatch, useSelector } from "react-redux"
import { setFilter } from "@/lib/slices/projects-slice"
import type { RootState } from "@/lib/store"

export function PortfolioSearch() {
  const [searchTerm, setSearchTerm] = useState("")
  const dispatch = useDispatch()
  const filters = useSelector((state: RootState) => state.projects.filters)

  const handleSearch = () => {
    dispatch(setFilter({ search: searchTerm }))
  }

  const handleClear = () => {
    setSearchTerm("")
    dispatch(setFilter({ search: "" }))
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  return (
    <div className="flex items-center absolute top-0 right-1 space-x-2 max-w-md">
      <div className="relative flex-1">
        <Input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
          className="pr-10"
        />
        {filters.search && (
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClear}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
      <Button onClick={handleSearch} size="icon" className="bg-amber-600 hover:bg-amber-700">
        <Search className="h-4 w-4" />
      </Button>
    </div>
  )
}
