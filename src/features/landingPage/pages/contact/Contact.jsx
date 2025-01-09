import "./contact.scss";
import { contactData } from "../../../../app/data";

const Contact = (props)=>{

    return (
        <div className="contact">
            
            <div 
              className="faceImage"
              style={{
                 backgroundImage: `url(${contactData.frontImage})`
              }}  
            >
                <h1>Our Team</h1>

            </div>

            <div className="contactContent">

                 <div className="formContent">
                     <h1>Get in Touch</h1>
                      <form className="contactForm">
                           <textarea placeholder="Enter message" className="inputMessage"></textarea>
                           <div className="personnalDetail">
                              <input type="text" placeholder="Enter your name" className="inputControl" />
                              <input type="text" placeholder="Email" className="inputControl" /> 
                           </div>
                           <input type="text" placeholder="Enter Subject" className="inputControl" />

                           <button className="submitBtn">
                               SEND
                           </button>              
                      </form>
                 </div>
                 <div className="contactDetail">
                      <div className="contactItem">
                           <span className="fa fa-home fa-2x"></span>
                           <div className="textContent">
                                <span>{contactData.city}</span>
                                <span>{contactData.address}</span>
                           </div>
                      </div>

                      <div className="contactItem">
                           <span className="fa fa-phone fa-2x"></span>
                           <div className="textContent">
                                <span>{contactData.phone}</span>
                                <span>{contactData.workDays}</span>
                           </div>
                      </div>

                      <div className="contactItem">
                           <span className="fa fa-envelope fa-2x"></span>
                           <div className="textContent">
                                <span>{contactData.email}</span>
                                <span>{contactData.emailPlaceHolder}</span>
                           </div>
                      </div>

                 </div>
            </div>

            <div className="embeddedMap">
                <iframe
                    src="https://www.google.com/maps?q=6.383672,7.49386&hl=es;z=17&output=embed"
                    width="100%"
                    height="600"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>


        </div>
    )
}


export default Contact;