'use client'

import { useState, useMemo } from 'react'
import { type BlogType } from '@/lib/blogs'

interface BlogSearchProps {
  blogs: BlogType[]
  onSearchResults: (results: BlogType[]) => void
  onSearchChange?: (query: string) => void
}

export function BlogSearch({ blogs, onSearchResults, onSearchChange }: BlogSearchProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredBlogs = useMemo(() => {
    if (!searchQuery.trim()) {
      return blogs
    }

    const query = searchQuery.toLowerCase()
    return blogs.filter((blog) => {
      const titleMatch = blog.title.toLowerCase().includes(query)
      const descriptionMatch = blog.description.toLowerCase().includes(query)
      const tagsMatch = blog.tags?.some(tag => 
        tag.toLowerCase().includes(query)
      ) || false
      
      return titleMatch || descriptionMatch || tagsMatch
    })
  }, [blogs, searchQuery])

  // Update parent component with search results
  useMemo(() => {
    onSearchResults(filteredBlogs)
    onSearchChange?.(searchQuery)
  }, [filteredBlogs, onSearchResults, searchQuery, onSearchChange])

  return (
    <div className="mb-4">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg
            className="h-5 w-5 text-zinc-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search blogs by title, description, or tags..."
          className="block w-full pl-10 pr-3 py-2 border border-zinc-300 rounded-md leading-5 bg-white placeholder-zinc-500 focus:outline-none focus:placeholder-zinc-400 focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500 dark:bg-zinc-800 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-zinc-100 dark:focus:ring-zinc-400 dark:focus:border-zinc-400"
        />
      </div>
      {searchQuery && (
        <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Found {filteredBlogs.length} blog{filteredBlogs.length !== 1 ? 's' : ''}
          {filteredBlogs.length !== blogs.length && ` out of ${blogs.length}`}
        </div>
      )}
    </div>
  )
} 