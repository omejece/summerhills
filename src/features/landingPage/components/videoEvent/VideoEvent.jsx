import "./videoEvent.scss";



const VideoEvent = (props)=>{
    
     return (
        <div className="videoEvent">
            <div 
              className="videoContainer"
            >
                  <video 
                    autoplay 
                    controls>
                        <source src={props.videoEventData.video} type="video/mp4" />
                        Your browser does not support the video tag.
                  </video>

            </div>
            <div className="eventBody">
                <span>{props.videoEventData.title}</span>
                <p>{props.videoEventData.brief}</p>
                {
                    props?.showBecomePatner
                    ?<div className="bodyFooter">
                        <a href={props.videoEventData.donateLink}>
                            Become A Partner
                        </a>
                     </div>
                     :<></>
                }

            </div>

        </div>
     );
}

export default VideoEvent;