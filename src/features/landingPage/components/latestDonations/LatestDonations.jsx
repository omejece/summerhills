import "./latestDonations.scss";

const LatestDonations = (props)=>{
    return (
        <div className="latestDonations">
            <h3>Latest Donations</h3>
            <div className="donations">
                {
                    props.latestDonationData.map((data,index)=>{
                        return (
                            <div className="donationItem">
                                <div className="imageContainer">
                                    <img src={data.image} alt="" /> 
                                </div>
                                <div className="donationBody">
                                    <span>{data.name}</span>
                                    <span>Donated {data.time} ago</span>
                                </div>
                                <div className="donationfooter">
                                    <div>Donated</div>
                                    <div>${data.amount}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default  LatestDonations;



