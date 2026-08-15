import { useState } from "react";
import styles from "./contactUs.module.css";
import { getImageUrl } from "../../../utils";

const Contact = () => {
  const [userdata, setuserdata] = useState({
    name: "",
    Email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("Submit Inquiry");

  const data = (e) => {
    const { name, value } = e.target;
    setuserdata({ ...userdata, [name]: value });
  };

  const send = async (e) => {
    e.preventDefault();
    const { name, Email, subject, message } = userdata;
    
    if (!name || !Email || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    setStatus("Sending...");

    const option = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name, Email, subject, message }),
    };

    try {
      const res = await fetch(
        "https://contactus-3ee4c-default-rtdb.firebaseio.com/massages.json",
        option
      );
      if (res.ok) {
        setStatus("Message Sent");
        setuserdata({ name: "", Email: "", subject: "", message: "" });
        setTimeout(() => setStatus("Submit Inquiry"), 3000);
      } else {
        setStatus("Failed. Try Again.");
        setTimeout(() => setStatus("Submit Inquiry"), 3000);
      }
    } catch (error) {
      setStatus("Error Occurred");
      setTimeout(() => setStatus("Submit Inquiry"), 3000);
    }
  };

  return (
    <section className={styles.container} id="contactUs">
      <div className={styles.contentWrapper}>
        <div className={styles.imageWrapper}>
          <img
            src={getImageUrl("images/nine.jpg")}
            className={styles.contact_img}
            alt="Interior Details"
          />
        </div>

        <div className={styles.Conatct_box}>
          <span className={styles.eyebrow}>Start a Project</span>
          <h2 className={styles.title}>
            Let's create something <em>extraordinary</em>
          </h2>

          <form className={styles.contact_box_form} onSubmit={send}>
            <div className={styles.inputGroup}>
              <input
                type="text"
                name="name"
                value={userdata.name}
                placeholder="Full Name"
                onChange={data}
                required
              />
            </div>
            
            <div className={styles.inputGroup}>
              <input
                type="email"
                name="Email"
                value={userdata.Email}
                placeholder="Email Address"
                onChange={data}
                required
              />
            </div>
            
            <div className={styles.inputGroup}>
              <input
                type="text"
                name="subject"
                value={userdata.subject}
                placeholder="Project Type (e.g. Residential)"
                onChange={data}
              />
            </div>
            
            <div className={styles.inputGroup}>
              <textarea
                value={userdata.message}
                name="message"
                placeholder="Tell us about your vision..."
                onChange={data}
                required
              />
            </div>

            <button type="submit" className={styles.submitBtn}>
              {status}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;