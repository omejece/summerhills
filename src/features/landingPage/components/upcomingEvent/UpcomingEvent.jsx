import "./upcomingEvent.scss";


const UpcomingEvent = (props)=>{
    
     return (
        <div className="upcommingEvents">
            <div 
            className="imageContainer"
            style={{
                backgroundImage: `url(${props.upcomingProgramData.image})`
            }}
            ></div>
            <div className="eventBody">
                <span>Upcomming Program</span>
                <span>{props.upcomingProgramData.title}</span>
                <p>{props.upcomingProgramData.brief}</p>
                <div className="bodyFooter">
                    <a href={props.upcomingProgramData.donateLink}>
                        Donate Now
                    </a>
                    <a href={props.upcomingProgramData.programLink}>View Program</a>
                </div>
            </div>

        </div>
     );
}

export default UpcomingEvent;