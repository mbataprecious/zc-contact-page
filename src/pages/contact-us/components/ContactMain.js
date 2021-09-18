import  '../styles/contactMain.module.css'
import ContactUs from "./ContactUsImg.png";
import FAQsSelector from "./FAQsSelector.js";
import FAQselected from "./FAQSelected.js";


const contactTitle = () => {
  return (
    
    <div>
      <div className="contactHead">
        <h1>Contact Us</h1>
        <p>
          We are dedicated to making your online communication experience with
          us a pleasure We’d like to hear from you.
        </p>
      </div>
      
      <div className="contactBody">
        <div className="getHelpCard">
          <FAQsSelector />

          <FAQselected />
        </div>

        <img src={ContactUs} alt="contact us" />
      </div>
    </div>
  
  )
}

export default contactTitle
