import { useEffect } from 'react';
import './ContactPage.css';

function ContactPage() {
  useEffect(() => {
    // Ensure page is properly loaded for iOS
    document.documentElement.style.height = '100%';
    document.body.style.height = '100%';
    
    // Set meta tags for iOS deployment
    const metaViewport = document.querySelector('meta[name="viewport"]');
    if (metaViewport) {
      metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0, viewport-fit=cover');
    }
  }, []);

  return (
    <div className="contact-page">
      <div className="contact-container">
        <header className="contact-header">
          <div className="logo-small">
            <span className="logo-icon-small">💬</span>
            <span className="logo-text">MatrixChat</span>
          </div>
        </header>

        <div className="contact-content">
          <h1>Support & Contact</h1>
          
          <p className="contact-description">
            If you need help or have any questions about MatrixChat, please contact us at:
          </p>

          <div className="support-info">
            <div className="info-card">
              <span className="info-icon">📧</span>
              <h2>Email Support</h2>
              <p>
                <a 
                  href="mailto:support@matrixchat.app"
                  role="link"
                  aria-label="Send email to support@matrixchat.app"
                >
                  support@matrixchat.app
                </a>
              </p>
            </div>

            <div className="info-card">
              <span className="info-icon">🌐</span>
              <h2>Website</h2>
              <p>
                <a 
                  href="https://www.matrixchat.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  role="link"
                  aria-label="Visit MatrixChat website"
                >
                  www.matrixchat.app
                </a>
              </p>
            </div>
          </div>

          <div className="help-section">
            <h2>How We Can Help</h2>
            <ul>
              <li>📝 Account or login issues</li>
              <li>🔐 Security and encryption questions</li>
              <li>💬 General support and questions</li>
              <li>🐛 Report bugs or technical issues</li>
              <li>💡 Feature requests and feedback</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
