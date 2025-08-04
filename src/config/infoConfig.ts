export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'Ruixi Zhang'
export const headline = 'Software engineer, AI enthusiast';
export const introduction =
  "I am a Master's student at the Institute of Computing Technology, Chinese Academy of Sciences (ICT, CAS), focusing on ML systems, AI infrastructure, and Large Language Models. Previously graduated from Jilin University's School of Software Engineering. For more details about my background and research interests, please visit my About page.";
export const email = 'zhangrx5521@163.com'
export const githubUsername = 'RuixiZhang0906'

// about page
export const aboutMeHeadline = 'Who Are You and Why Should I Care?'
export const aboutParagraphs = [
  "My name is Ruixi Zhang(张睿曦). I'm originally from Shaanxi, China, and currently pursuing my Master's degree at the Institute of Computing Technology (ICT), Chinese Academy of Sciences (CAS) in Beijing. My academic journey began at Jilin University's School of Software Engineering.",
  "My work centers on building efficient Machine Learning systems and AI infrastructure, with a specialized focus on optimizing Large Language Model (LLM) deployment for real-world applications. I'm particularly passionate about solving scalability challenges in distributed training and inference—recently contributing to a CAS project that reduced LLM serving latency by 37% through novel quantization techniques.",
  "While my current research explores the frontiers of LLM systems, my background in computer vision and computer graphics continues to shape my perspective. I believe cross-domain insights—from 3D rendering pipelines to neural network architectures—are essential for creating more robust, interpretable AI. Through this blog, I share technical deep dives, research reflections, and practical lessons from the rapidly evolving AI landscape."
]

// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro =
  "I've written something about AI, programming and my life."

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'ZhiHu',
    icon: 'zhihu',
    href: 'https://www.zhihu.com/people/ri-guang-32-57/posts',
  },
  // {
  //   name: 'Bilibili',
  //   icon: 'bilibili',
  //   href: 'https://space.bilibili.com/349721082',
  // },
]

// https://simpleicons.org/
export const techIcons = [
  'java',
  'oracle',
  'mysql',
  'react',
  'pytorch',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'ios',
  'apple',
  'wechat',
  'python',
  'rust',
  'codeforce',
  'c',
  'c++',
  'ubuntu',
  'jupyter',
  'llvm',
  'openai',
]
