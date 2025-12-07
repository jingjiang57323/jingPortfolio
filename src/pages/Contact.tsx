import React from "react";

export default function Contact() {
  const formBox: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '400px',
    margin: '80px auto',
    gap: '10px',
  };    

  return (
    <div >
      <img src="./asset/contact/contact.jpeg" alt="Contact" />
      <p style={{ textAlign: 'center', marginBottom: '30px', color: '#027c6eff', fontWeight: 'bold', fontSize: '21px' }}>If you ever want to chat, ask a question, or just say hi, I’d love to hear from you.</p>
      <form>
        <div style={formBox}>
          <label style={{ fontWeight: 'bold', textAlign: 'left' }} htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label style={{ fontWeight: 'bold', textAlign: 'left' }} htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label style={{ fontWeight: 'bold', textAlign: 'left' }} htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows={15} required></textarea>

          <button type="submit" style={{ backgroundColor: '#027c6eff', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>Send Message</button>
        </div>
      </form>
    </div>
  );
}
