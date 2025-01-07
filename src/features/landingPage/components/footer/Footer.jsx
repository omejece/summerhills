import "./footer.scss";

const Footer = (props)=>{
    return (
        <div className="footer">
            <div className="aboutUs">
                <h1>About Us</h1>
                <p>
                    {
                       props.aboutUsData.brief.length > 300
                       ? props.aboutUsData.brief.substring(0,300)+"..."
                       : props.aboutUsData.brief
                    }
                </p>

                <a href={props.aboutUsData.readMoreLink}>Read More</a>
            </div>
            <div className="upcommingEvents">
                 <h1> Events</h1>
                 {
                    props.latestNewsData.slice(0,4).map((data,index)=>{
                        return (
                            <div className="events">
                                 <img src={data.image} alt=""/>
                                 <div>
                                    <a href={data.programLink}>{data.title}</a>
                                    <div>
                                        <span className="fa fa-calendar fa-2x"></span>
                                        <span>
                                           {data.eventDate}
                                        </span>
                                    </div>
                                 </div>
                            </div>
                        )
                    })
                 }
            </div>
            <div className="contactUs">
                  <h1>Contact</h1>
                  <div>
                        <span className="fa fa-phone"></span>
                        <span>
                            {props.siteContact.phone}
                        </span>
                  </div>

                  <div>
                        <span className="fa fa-envelope"></span>
                        <span>
                            {props.siteContact.email}
                        </span>
                  </div>

                  <div>
                        <span className="fa fa-map-marker"></span>
                        <span>
                            {props.siteContact.address}
                        </span>
                  </div>
                  <div className="newsLetter">
                      <input className="emailInput" />
                      <button>
                          Submit
                      </button>
                  </div>
            </div>
        </div>
    );
}

export default Footer;