import '../Styles/About.css';

const About = () => {
    return (
        <div className="about-page">
            <div className="about-hero">
                <h1>About Us</h1>
                <p>Your trusted partner for seamless contact management</p>
            </div>
            
            <div className="about-content">
                <div className="about-section">
                    <h2>Our Mission</h2>
                    <p>We believe in making contact management simple, efficient, and accessible for everyone. ContactPro helps you organize, connect, and grow your network effortlessly.</p>
                </div>
                
                <div className="about-section">
                    <h2>Why Choose Us</h2>
                    <ul>
                        <li>Easy-to-use interface</li>
                        <li>Secure data management</li>
                        <li>Fast and reliable</li>
                        <li>Built with modern technology</li>
                    </ul>
                </div>
                
                <div className="about-section">
                    <h2>Contact Us</h2>
                    <p>Have questions? We'd love to hear from you.</p>
                    <div className="contact-info">
                        <p><strong> Phone:</strong> +91 9356443221</p>
                        <p><strong> Email:</strong>phonebook@gmail.com</p>
                    </div>
                </div>
                
                <div className="about-section">
                    <h2>Feedback</h2>
                    <p>Help us improve! Share your experience with ContactPro.</p>
                    <form className="feedback-form">
                        <select required>
                            <option value="">Rate your experience</option>
                            <option value="5"> Excellent</option>
                            <option value="4"> Good</option>
                            <option value="3"> Average</option>
                            <option value="2"> Poor</option>
                            <option value="1"> Very Poor</option>
                        </select>
                        <textarea placeholder="Tell us what you think..." rows="4" required></textarea>
                        <button type="submit">Submit Feedback</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default About;