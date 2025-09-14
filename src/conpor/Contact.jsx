import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h2>ติดต่อผม</h2>
        <p>หากต้องการติดต่อหรือสอบถามข้อมูลเพิ่มเติม สามารถติดต่อผมได้ผ่านช่องทางต่างๆ ดังนี้</p>
        
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-icon">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gmail.svg" alt="Email" />
            </div>
            <div className="contact-details">
              <h3>Email</h3>
              <p>boss@9choet.com</p>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg" alt="GitHub" />
            </div>
            <div className="contact-details">
              <h3>GitHub</h3>
              <p>github.com/9choet</p>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg" alt="LinkedIn" />
            </div>
            <div className="contact-details">
              <h3>LinkedIn</h3>
              <p>linkedin.com/in/9choet</p>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg" alt="Facebook" />
            </div>
            <div className="contact-details">
              <h3>Facebook</h3>
              <p>facebook.com/9choet</p>
            </div>
          </div>
        </div>
        
        <div className="contact-form">
          <h3>ส่งข้อความถึงผม</h3>
          <form>
            <div className="form-group">
              <input type="text" placeholder="ชื่อของคุณ" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="อีเมลของคุณ" required />
            </div>
            <div className="form-group">
              <textarea placeholder="ข้อความ" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn">ส่งข้อความ</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
