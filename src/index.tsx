import React, { createElement } from 'react';
import './index.css';
import { render } from 'react-dom';
import { App } from './App';
// Add meta tags for SEO
const metaTags = [{
  name: 'description',
  content: "Hyper One – Vietnam's Next-Gen AI Innovation Hub. AI for Humanity. Technology with Purpose."
}, {
  property: 'og:title',
  content: "Hyper One - Vietnam's Next-Gen AI Innovation Hub"
}, {
  property: 'og:description',
  content: "Hyper One – Vietnam's Next-Gen AI Innovation Hub. AI for Humanity. Technology with Purpose."
}, {
  property: 'og:type',
  content: 'website'
}, {
  property: 'og:image',
  content: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
}];
// Add meta tags to head
metaTags.forEach(tag => {
  const metaElement = document.createElement('meta');
  Object.keys(tag).forEach(key => {
    metaElement.setAttribute(key, tag[key]);
  });
  document.head.appendChild(metaElement);
});
// Set page title
document.title = "Hyper One - Vietnam's Next-Gen AI Innovation Hub";
render(<App />, document.getElementById('root'));