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
      <div className="flex flex-col sm:flex-row gap-4 items-start w-full">
        {/* Category Filter */}
        <div className="flex sm:flex-wrap gap-2 w-full overflow-x-auto sm:overflow-visible pb-2 sm:pb-0 scrollbar-hide">
          <Button
            variant={filters.category === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => handleCategoryChange("all")}
            className={`flex-shrink-0 ${
              filters.category === "all"
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "hover:bg-blue-50 hover:blue-red-600"
            } ${!window.matchMedia('(min-width: 640px)').matches ? "w-full" : ""}`}
          >
            All Projects
          </Button>
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filters.category === category.name.toLowerCase() ? "default" : "outline"}
              size="sm"
              onClick={() => handleCategoryChange(category.name.toLowerCase())}
              className={`flex-shrink-0 ${
                filters.category === category.name.toLowerCase()
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "hover:bg-red-50 hover:text-red-blue"
              } ${!window.matchMedia('(min-width: 640px)').matches ? "w-full" : ""}`}
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>
    )
}
