import Link from 'next/link'
import React from 'react'

function CustomLink({href, title, styles}) {
  return (
   <Link href={href} className={styles} target='_blank'>
        {title}
   </Link>
  )
}

export default CustomLink