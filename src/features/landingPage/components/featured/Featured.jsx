import Progressbar from "../progressBar/Progressbar";
import "./featured.scss";


const Featured = (props)=>{
    
    return (
        <div className="featured">
            <div className="writeUp">
                <h3>FEATURED</h3>
                <h3>{props.featureData.title}</h3>
                <p>{props.featureData.brief}</p>
                <span>{props.featureData.lastDonation}</span>
                <Progressbar percentage="20" />
                <span>
                {`$${props.featureData.amountRaised} raised of $${props.featureData.amountExpected} `}
                </span>

                <button>
                    DONATE NOW
                </button>
            </div>
            <div 
            className="image"
            style={{
                backgroundImage: `url(${props.featureData.image})`
            }}
            ></div>
        </div>
    );
}

export default Featured;
