'use client'

import {
  Bank,
  GithubLogo,
  XLogo,
  InstagramLogo,
  Envelope,
  GraduationCap,
  Coffee,
  Butterfly,
  Pill,
  WechatLogo,
  DiscordLogo,
  LinkedinLogo,
  Television,
  TiktokLogo,
} from '@phosphor-icons/react'

// 知乎图标组件
function ZhihuIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5.721 0C2.251 0 0 2.25 0 5.719V18.28C0 21.751 2.252 24 5.721 24h12.56C21.751 24 24 21.75 24 18.281V5.72C24 2.249 21.75 0 18.281 0zm1.964 4.078c-.271.732-.5 1.434-.68 2.105-.181.671-.317 1.317-.409 1.939-.092.622-.138 1.216-.138 1.784 0 .622.069 1.183.207 1.683.138.5.346.936.623 1.308.277.372.623.668 1.039.888.416.22.902.33 1.458.33.416 0 .78-.069 1.092-.207.312-.138.576-.346.792-.623.216-.277.384-.623.504-1.039.12-.416.18-.902.18-1.458 0-.416-.046-.78-.138-1.092-.092-.312-.23-.576-.414-.792-.184-.216-.414-.384-.69-.504-.276-.12-.598-.18-.966-.18-.276 0-.504.046-.684.138-.18.092-.324.23-.432.414-.108.184-.18.414-.216.69-.036.276-.054.598-.054.966 0 .368.018.69.054.966.036.276.108.506.216.69.108.184.252.322.432.414.18.092.408.138.684.138.368 0 .69-.06.966-.18.276-.12.506-.288.69-.504.184-.216.322-.48.414-.792.092-.312.138-.676.138-1.092 0-.556-.06-1.042-.18-1.458-.12-.416-.288-.762-.504-1.039-.216-.277-.48-.485-.792-.623-.312-.138-.676-.207-1.092-.207-.556 0-1.042.11-1.458.33-.416.22-.762.516-1.039.888-.277.372-.485.808-.623 1.308-.138.5-.207 1.061-.207 1.683 0 .568.046 1.162.138 1.784.092.622.228 1.268.409 1.939.181.671.409 1.373.68 2.105.271.732.588 1.434.952 2.105.364.671.776 1.317 1.236 1.939.46.622.952 1.216 1.476 1.784.524.568 1.092 1.092 1.704 1.572.612.48 1.268.902 1.968 1.266.7.364 1.444.648 2.232.852.788.204 1.62.306 2.496.306.416 0 .78-.018 1.092-.054.312-.036.576-.108.792-.216.216-.108.384-.252.504-.432.12-.18.18-.408.18-.684 0-.276-.06-.504-.18-.684-.12-.18-.288-.324-.504-.432-.216-.108-.48-.18-.792-.216-.312-.036-.676-.054-1.092-.054-.876 0-1.708-.102-2.496-.306-.788-.204-1.532-.488-2.232-.852-.7-.364-1.356-.786-1.968-1.266-.612-.48-1.18-1.004-1.704-1.572-.524-.568-1.016-1.162-1.476-1.784-.46-.622-.872-1.268-1.236-1.939-.364-.671-.681-1.373-.952-2.105z"/>
    </svg>
  )
}

export function CustomIcon({
  name,
  size = 20,
}: {
  name: string
  size?: number
}) {
  switch (name) {
    case 'bank':
      return <Bank size={size} weight="duotone" />
    case 'github':
      return <GithubLogo size={size} weight="duotone" />
    case 'x':
      return <XLogo size={size} weight="duotone" />
    case 'instagram':
      return <InstagramLogo size={size} weight="duotone" />
    case 'bsky':
      return <Butterfly size={size} weight="duotone" />
    case 'email':
      return <Envelope size={size} weight="duotone" />
    case 'college':
      return <GraduationCap size={size} weight="duotone" />
    case 'coffee':
      return <Coffee size={size} weight="duotone" />
    case 'pill':
      return <Pill size={size} weight="duotone" />
    case 'wechat':
      return <WechatLogo size={size} weight="duotone" />
    case 'discord':
      return <DiscordLogo size={size} weight="duotone" />
    case 'linkedin':
      return <LinkedinLogo size={size} weight="duotone" />
    case 'tiktok':
      return <TiktokLogo size={size} weight="duotone" />
    case 'bilibili':
      return <Television size={size} weight="duotone" />
    case 'zhihu':
      return <ZhihuIcon size={size} />
    default:
      return null
  }
}
