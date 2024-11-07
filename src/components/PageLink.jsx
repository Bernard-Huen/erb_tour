import React from 'react'

function PageLink() {
  return (
    <li>
    <a href={pageLinks[0].href} className={itemClass}>
    {pageLinks[0].text}
    </a></li>
  )
}

export default PageLink