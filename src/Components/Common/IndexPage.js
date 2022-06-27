import React from 'react'
import YouTube from 'react-youtube'
function IndexPage({videos}) {
    if (!videos){
        return <h1 className="nhtf">Nothing Here Try Again</h1>
      }
      return (
        <div className="homePage">
          {videos.map((video) => <YouTube videoThumbnails={video.snippets.thumbnails.default.url} />)}
        </div>
      )
    }
    

export default IndexPage