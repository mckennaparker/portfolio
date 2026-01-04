import '../styles/Contact.css';

const Contact = () => {
    return (
        <div className="page-container">
            <div className="contact-container">
                <h2 className="contact-title">Contact Me</h2>
                <form action="mailto:mckennarparker@gmail.com" method="POST" encType="text/plain" className="contact-form">
                    <div className="form-name">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Enter your name..." required />
                    </div>

                    <div className="form-email">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email..." required />
                    </div>

                    <div className="form-subject">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" placeholder="Enter your message..." required></textarea>
                    </div>

                    <button type="submit" className="btn">Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;