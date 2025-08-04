'use client'

import { useState } from 'react'
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
}

export function BlogList({ blogs }: BlogListProps) {
  const [filteredBlogs, setFilteredBlogs] = useState(blogs)

  return (
    <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
      <BlogSearch blogs={blogs} onSearchResults={setFilteredBlogs} />
      <div className="flex max-w-3xl flex-col space-y-16">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog: BlogType) => (
            <Blog key={blog.slug} blog={blog} />
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-zinc-600 dark:text-zinc-400">
              No blogs found matching your search criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  )
} 