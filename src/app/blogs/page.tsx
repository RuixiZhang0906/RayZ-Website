import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/layout/SimpleLayout'
import { BlogList } from '@/components/blogs/BlogList'
import { type BlogType, getAllBlogs } from '@/lib/blogs'
import { blogHeadLine, blogIntro } from '@/config/infoConfig'

export const runtime = process.env.NEXT_RUNTIME === 'edge' ? 'edge' : 'nodejs'

export const metadata: Metadata = {
  title: 'Blogs',
  description:
    blogIntro
}

export default async function BlogsIndex() {
  let blogs = await getAllBlogs()

  return (
    <SimpleLayout
      title={blogHeadLine}
      intro={blogIntro}
    >
      <div className="mt-0">
        <BlogList blogs={blogs} />
      </div>
    </SimpleLayout>
  )
}
