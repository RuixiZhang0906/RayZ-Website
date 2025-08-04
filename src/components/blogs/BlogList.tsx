'use client'

import { useState, useMemo } from 'react'
import { Card } from '@/components/shared/Card'
import { Tags } from '@/components/shared/Tags'
import { BlogSearch } from '@/components/shared/BlogSearch'
import { type BlogType } from '@/lib/blogs'
import { formatDate } from '@/lib/formatDate'

function Blog({ blog }: { blog: BlogType }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/blogs/${blog.slug}`}>
          {blog.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={blog.date}
          className="md:hidden"
          decorate
        >
          {formatDate(blog.date)}
        </Card.Eyebrow>
        <Card.Description>{blog.description}</Card.Description>
        
        {/* Reading time and tags */}
        <div className="mt-4 flex flex-col gap-2">
          {blog.readingTime && (
            <div className="flex items-center text-sm text-zinc-600 dark:text-zinc-400">
              <svg
                className="mr-1 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {blog.readingTime.text}
            </div>
          )}
          <Tags tags={blog.tags} />
        </div>
        
        <Card.Cta>Read blog</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={blog.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(blog.date)}
      </Card.Eyebrow>
    </article>
  )
}

interface BlogListProps {
  blogs: BlogType[]
  allTags: string[]
}

export function BlogList({ blogs, allTags }: BlogListProps) {
  const [filteredBlogs, setFilteredBlogs] = useState(blogs)
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState('')

  // 获取所有唯一标签
  const uniqueTags = useMemo(() => {
    const tags = blogs.flatMap(blog => blog.tags || [])
    return [...new Set(tags)].sort()
  }, [blogs])

  // 根据搜索查询和标签筛选博客
  const filteredBlogsBySearchAndTags = useMemo(() => {
    return blogs.filter(blog => {
      const matchesSearch = searchQuery === '' || 
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.description.toLowerCase().includes(searchQuery.toLowerCase())
      
      const matchesTags = selectedTags.length === 0 || 
        selectedTags.some(tag => blog.tags?.includes(tag))
      
      return matchesSearch && matchesTags
    })
  }, [blogs, searchQuery, selectedTags])

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    )
  }

  const clearAllTags = () => {
    setSelectedTags([])
  }

  return (
    <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
      {/* 搜索和标签筛选区域 */}
      <div className="mb-8 space-y-4">
        <BlogSearch blogs={blogs} onSearchResults={setFilteredBlogs} onSearchChange={setSearchQuery} />
        
        {/* 标签筛选器 */}
        {uniqueTags.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                按标签筛选
              </h3>
              {selectedTags.length > 0 && (
                <button
                  onClick={clearAllTags}
                  className="text-sm text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
                >
                  清除所有
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {uniqueTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => handleTagToggle(tag)}
                  className={`px-3 py-1 text-sm rounded-full transition-colors ${
                    selectedTags.includes(tag)
                      ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
                      : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 博客列表 */}
      <div className="flex max-w-3xl flex-col space-y-16">
        {filteredBlogsBySearchAndTags.length > 0 ? (
          filteredBlogsBySearchAndTags.map((blog: BlogType) => (
            <Blog key={blog.slug} blog={blog} />
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-zinc-600 dark:text-zinc-400">
              {searchQuery || selectedTags.length > 0 
                ? '没有找到匹配的博客。'
                : '暂无博客文章。'
              }
            </p>
          </div>
        )}
      </div>
    </div>
  )
} 