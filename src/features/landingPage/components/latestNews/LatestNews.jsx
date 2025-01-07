import { useRef } from "react";
import "./latestNews.scss";


const LatestNews = (props)=>{
    
    const latestNewsScrollRef = useRef(null);


    const handleScrollEvent = (direction)=>{
         if(latestNewsScrollRef){
            if(direction == "left"){
                latestNewsScrollRef.current.scrollTo({
                    left: latestNewsScrollRef.current.scrollLeft - 200,
                    behavior: "smooth"
                });
            }
            else{
                latestNewsScrollRef.current.scrollTo({
                    left: latestNewsScrollRef.current.scrollLeft + 200,
                    behavior: "smooth"
                });
            }
         }
    }

    return (
        <div className="latestNews">
                <h3>Latest News</h3>
                <div className="news" ref={latestNewsScrollRef}>
                    {
                        props.latestNewsData.map((data,index)=>{
                            return (
                                <div className="newsItem">
                                    <div 
                                       className="newsImageContainer"
                                       style={{
                                           backgroundImage: `url(${data.image})`
                                       }}
                                     >
                                        <div className="eventDate">
                                             {data.eventDate}
                                        </div>
                                    </div>
                                    <div className="newsItemBody">
                                        <span>{data.title}</span>
                                        <p>{data.brief}</p>
                                        <a href={data.programLink}>Read More</a>
                                    </div>
                                </div>
                            );
                        })
                    }

                </div>
                <div className="newsScrollActionButtons">
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
    );
}


export default LatestNews;
