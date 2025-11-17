import React, { useState } from 'react'
import './index.css'
import { render } from 'react-dom'
import { App } from './App'
import Intro from './Intro'

const metaTags = [
  {
    name: 'description',
    content:
      "Hyper One – Vietnam's Next-Gen AI Innovation Hub. AI for Humanity. Technology with Purpose."
  },
  {
    property: 'og:title',
    content: "Hyper One - Vietnam's Next-Gen AI Innovation Hub"
  },
  {
    property: 'og:description',
    content:
      "Hyper One – Vietnam's Next-Gen AI Innovation Hub. AI for Humanity. Technology with Purpose."
  },
  { property: 'og:type', content: 'website' },
  {
    property: 'og:image',
    content:
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
  }
]

metaTags.forEach((tag) => {
  const el = document.createElement('meta')
  Object.keys(tag).forEach((k) => el.setAttribute(k, tag[k]))
  document.head.appendChild(el)
})

document.title = "Hyper One - Vietnam's Next-Gen AI Innovation Hub"

const Root = () => {
  const [showApp, setShowApp] = useState(false)
  return (
    <>
      {!showApp && <Intro onFinish={() => setShowApp(true)} />}
      {showApp && <App />}
    </>
  )
}

render(<Root />, document.getElementById('root'))
