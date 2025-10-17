import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoadingPage.css';

function LoadingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to contact page immediately
    navigate('/contact');
  }, [navigate]);

  return (
    <div className="loading-page">
      <div className="loading-container">
        <div className="logo-section">
          <div className="app-logo">
            <span className="logo-icon">💬</span>
          </div>
          <h1 className="app-title">MatrixChat</h1>
          <p className="app-subtitle">Secure Communication Platform</p>
        </div>

        <div className="features-section">
          <div className="feature">
            <span className="feature-icon">🔒</span>
            <span>End-to-End Encryption</span>
          </div>
          <div className="feature">
            <span className="feature-icon">🚀</span>
            <span>Fast & Reliable</span>
          </div>
          <div className="feature">
            <span className="feature-icon">🌐</span>
            <span>Cross-Platform</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadingPage;
