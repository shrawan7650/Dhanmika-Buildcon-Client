"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { getCategories, type Category } from "@/lib/firebase"
import { useDispatch, useSelector } from "react-redux"
import { setFilter } from "@/lib/slices/projects-slice"
import type { RootState } from "@/lib/store"

export function PortfolioFilters() {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const filters = useSelector((state: RootState) => state.projects.filters)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories()
        setCategories(data)
      } catch (error) {
        console.error("Error fetching categories:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchCategories()
  }, [])

  const handleCategoryChange = (category: string) => {
    dispatch(setFilter({ category }))
  }

  const handleSortChange = (sortBy: string) => {
    dispatch(setFilter({ sortBy }))
  }

  if (loading) {
    return (
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <div className="flex gap-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-9 w-20 bg-gray-200 rounded animate-pulse" />
          ))}
        </div>
        <div className="h-9 w-48 bg-gray-200 rounded animate-pulse" />
      </div>
    )
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        <Button
          variant={filters.category === "all" ? "default" : "outline"}
          size="sm"
          onClick={() => handleCategoryChange("all")}
          className={filters.category === "all" ? "bg-red-600 hover:bg-red-700" : "hover:bg-red-50 hover:text-red-600"}
        >
          All Projects
        </Button>
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={filters.category === category.name.toLowerCase() ? "default" : "outline"}
            size="sm"
            onClick={() => handleCategoryChange(category.name.toLowerCase())}
            className={
              filters.category === category.name.toLowerCase()
                ? "bg-red-600 hover:bg-red-700"
                : "hover:bg-red-50 hover:text-red-600"
            }
          >
            {category.name}
          </Button>
        ))}
      </div>

      {/* Sort Filter */}
      {/* <Select value={filters.sortBy} onValueChange={handleSortChange}>
        <SelectTrigger className="w-48">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="latest">Latest First</SelectItem>
          <SelectItem value="year">By Year</SelectItem>
          <SelectItem value="category">By Category</SelectItem>
        </SelectContent>
      </Select> */}
    </div>
  )
}
