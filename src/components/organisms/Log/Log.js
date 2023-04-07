import * as React from 'react'

import "./Log.css"

export default function Log({ data }) {
  let videoJSX = null;
  if (data.frontmatter?.videoLink != null) {
    videoJSX = (<div class="video-container">
      <iframe src={data.frontmatter?.videoLink} title="Youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>);
  }

  return (
    <div className="log">
      <h1>{data.frontmatter?.title}</h1>
      <h4>{data.frontmatter?.date}</h4>
      {videoJSX}

      <div dangerouslySetInnerHTML={{ __html: data.html }} />
    </div >
  )
}
