import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { aboutMeHeadline, aboutParagraphs } from '@/config/infoConfig'
import { Container } from '@/components/layout/Container'

import portraitImage from '@/images/portrait.jpg'
import SocialLinks from '@/components/about/SocialLinks'

export const metadata: Metadata = {
  title: 'About',
  description:
    'I\'m Spencer Sharp. I live in New York City, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            {aboutMeHeadline}
          </h1>
          <div className="mt-6 space-y-7 text-xl text-zinc-700 dark:text-zinc-300">
            <p>
              My name is <strong>Ruixi Zhang(张睿曦)</strong>. I&apos;m originally from Shaanxi, China, and currently pursuing my Master&apos;s degree at the{' '}
              <a 
                href="https://www.ict.ac.cn/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zinc-900 dark:text-zinc-50 underline hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
              >
                Institute of Computing Technology (ICT)
              </a>
              ,{' '}
              <a 
                href="https://www.cas.cn/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zinc-900 dark:text-zinc-50 underline hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
              >
                Chinese Academy of Sciences (CAS)
              </a>
              {' '}in Beijing. My academic journey began at{' '}
              <a 
                href="https://www.jlu.edu.cn/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zinc-900 dark:text-zinc-50 underline hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
              >
                Jilin University&apos;s School of Software Engineering
              </a>
              .
            </p>
            <p>
              My work centers on building <strong>efficient Machine Learning systems and AI infrastructure</strong>, with a specialized focus on optimizing <strong>Large Language Model (LLM) deployment</strong> for real-world applications. I&apos;m particularly passionate about solving <strong>scalability challenges in distributed training and inference</strong>—recently contributing to a CAS project that <strong>reduced LLM serving latency by 37%</strong> through novel quantization techniques.
            </p>
            <p>
              While my current research explores the frontiers of <strong>LLM systems</strong>, my background in <strong>computer vision and computer graphics</strong> continues to shape my perspective. I believe <strong>cross-domain insights</strong>—from 3D rendering pipelines to neural network architectures—are essential for creating more robust, interpretable AI. Through this blog, I share technical deep dives, research reflections, and practical lessons from the rapidly evolving AI landscape.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <SocialLinks />
          {/* Resume Buttons */}
          <div className="mt-6 space-y-3">
            <Link
              href="/pdf/resume-cn.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white rounded-md hover:bg-zinc-800 transition-colors dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              View Resume(Chinese)
            </Link>
            <Link
              href="/pdf/resume-en.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white rounded-md hover:bg-zinc-800 transition-colors dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              View Resume(English)
            </Link>
          </div>
        </div>
      </div>
    </Container>
  )
}
