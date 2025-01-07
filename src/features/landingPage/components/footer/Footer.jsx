import "./footer.scss";

const Footer = (props)=>{
    return (
        <div className="footer">
            <div>
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
            <div>
                 <h1>Upcomming Events</h1>
            </div>
            <div>
                  <h1>Contact</h1>
            </div>
        </div>
    );
}

export default Footer;