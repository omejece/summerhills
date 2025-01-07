import { useRef } from "react";
import "./fundRaisingEvents.scss";
import Progressbar from "../progressBar/Progressbar";



const FundRaisingEvents = (props)=>{

    const eventScrollRef = useRef(null);


    const handleScrollEvent = (direction)=>{
         if(eventScrollRef){
            if(direction == "left"){
                eventScrollRef.current.scrollTo({
                    left: eventScrollRef.current.scrollLeft - 200,
                    behavior: "smooth"
                });
            }
            else{
                eventScrollRef.current.scrollTo({
                    left: eventScrollRef.current.scrollLeft + 200,
                    behavior: "smooth"
                });
            }
         }
    }
    
    return (
        <div className="fundRaising">
            <h3>FUND RAISERS</h3>
            <div className="fundRaisingEvents">
                <div className="events" ref={eventScrollRef}>
                    {
                        props.fundRaisingEvents.map((data,index)=>{
                            return (
                                <div className="itemEventList">
                                    <img src={data.image}  alt="" />
                                    <div className="donationEventContent">
                                        <span>{data.title}</span>
                                        <p>{data.brief}</p>
                                        <Progressbar percentage="20" bgColor="#F2F2F2" color="#28A745" />
                                        <span>
                                            {`$${data.amountRaised} raised of $${data.amountExpected} `}
                                        </span>

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="eventScrollActionButtons">
                    <div 
                        className="itemScrollBtnLeft"
                        onClick={()=>handleScrollEvent("left")}
                    >
                            <span className="fa fa-chevron-left fa-3x"></span>
                    </div>

                    <div 
                        className="itemScrollBtnRight"
                        onClick={()=>handleScrollEvent("right")}
                    >
                            <span className="fa fa-chevron-right fa-3x"></span>
                    </div>
                </div>
            </div>
    </div>
    );
}

export default FundRaisingEvents;