import { clsx } from 'clsx'

interface TagsProps {
  tags?: string[]
  className?: string
}

export function Tags({ tags, className }: TagsProps) {
  if (!tags || tags.length === 0) {
    return null
  }

  return (
    <div className={clsx('flex flex-wrap gap-2', className)}>
      {tags.map((tag) => (
        <span
          key={tag}
          className="inline-flex items-center rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-800 dark:bg-zinc-700 dark:text-zinc-200"
        >
          {tag}
        </span>
      ))}
    </div>
  )
} 