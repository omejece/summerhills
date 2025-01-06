import ImageSlider from "../../components/imageSlider/ImageSlider";
import {appealItemContent, featureData} from "../../../../app/data";
import "./home.scss";
import Progressbar from "../../components/progressBar/Progressbar";


const Home = ()=>{
    
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

        </div>
    );
}

export default Home;