import ImageSlider from "../../components/imageSlider/ImageSlider";
import {appealItemContent, featureData,fundRaisingEvents} from "../../../../app/data";
import "./home.scss";
import Progressbar from "../../components/progressBar/Progressbar";
import { useRef } from "react";


const Home = ()=>{

    const eventScrollRef = useRef(null);


    const handleScrollEvent = (direction)=>{
         if(eventScrollRef){
            if(direction == "left"){
                eventScrollRef.current.scrollLeft  -= 20
            }
            else{
                eventScrollRef.current.scrollLeft += 20;
            }
         }
    }
    
    return (
        <div className="home">
             <ImageSlider />
             <div className="appeal">
                  {
                    appealItemContent.map((data,index)=>{
                        return (
                            <div className="appealItem">
                                <span className={data.icon}></span>
                                <div className="appealItemContent">
                                    <span>{data.title}</span>
                                    <p>{data.brief}</p>
                                    <a href={data.link}>Learn More</a>
                                </div>
                            </div>
                        )
                    })
                  }

             </div>

             <div className="featured">
                 <div className="writeUp">
                      <h3>FEATURED</h3>
                      <h3>{featureData.title}</h3>
                      <p>{featureData.brief}</p>
                      <span>{featureData.lastDonation}</span>
                      <Progressbar percentage="20" />
                      <span>
                        {`$${featureData.amountRaised} raised of $${featureData.amountExpected} `}
                      </span>

                      <button>
                          DONATE NOW
                      </button>
                 </div>
                 <div 
                   className="image"
                   style={{
                      backgroundImage: `url(${featureData.image})`
                   }}
                 ></div>
             </div>

             <div className="topFundRaisers">
                  <h3>TOP FUND RAISERS</h3>
                  <div className="fundRaisingEvents">
                       <div className="events" ref={eventScrollRef}>
                            {
                                fundRaisingEvents.map((data,index)=>{
                                    return (
                                        <div className="itemEventList">
                                            <img src={data.image}  alt="" />
                                            <div className="donationEventContent">
                                                <span>{data.title}</span>
                                                <p>{data.brief}</p>
                                                <Progressbar percentage="20" bgColor="#F2F2F2" color="#28A745" />
                                                <span>
                                                    {`$${data.amountRaised} raised of $${featureData.amountExpected} `}
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

                  <div className="latestDonations">
                        <h3>Latest Donations</h3>
                  </div>
             </div>
             <div className="successStories">

             </div>
             <div className="latestNews">
                  <h3>Latest News</h3>
             </div>

        </div>
    );
}

export default Home;