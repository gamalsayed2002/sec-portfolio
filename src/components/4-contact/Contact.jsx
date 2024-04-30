import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import img from "./imgs/Consent-amico.png"
export default function Contact() {
  const [state, handleSubmit] = useForm("xeqynakg");

  return (
    <section className="contact" id="contact">
    <div className="left-contaienr">
        <div className="contact-header">
          <h1>
            <span className="icon-envelope"></span>
            Contact Us
          </h1>
          <p>
            Contact Us for more information and Get notified when i publish
            something new .
          </p>
        </div>
      
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
      
            <div>
              <label htmlFor="num">Phone Number</label>
              <input type="number" id="num" required name="number" />
              <ValidationError
                prefix="Number"
                field="number"
                errors={state.errors}
              />
            </div>
            <div>
              <label htmlFor="message">Your Message</label>
              <textarea id="message" required name="message"></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button type="submit" disabled={state.submitting} s>
              {state.submitting ? "submiting ... " : "submit"}
            </button>
            {state.succeeded && <h1 style={{ color:"var(--title)" ,fontSize:"18px" , marginTop:"1rem"}}>Your message has been sent</h1>}
          </form>
       
        </div>
    </div>
      <div className="animation">
          <img src={img} alt="" />
        </div>
    </section>
  );
}
