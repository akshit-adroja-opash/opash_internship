import { useParams } from "react-router-dom";
import './Profile.css';

type Params = {
    userId: string;
};

const Profile = () => {
    const {userId} = useParams<Params>();

    return (
        <div className="profile">
            <div className="profile-header">
                <div className="avatar-circle">{userId ? userId.charAt(0).toUpperCase() : '?'}</div>
                <div className="profile-info">
                    <h1>User {userId}</h1>
                    <p className="profile-role">Investor & Trader</p>
                </div>
            </div>

            <div className="profile-details">
                <div className="detail-section">
                    <h2>Personal Information</h2>
                    <div className="detail-grid">
                        <div className="detail-item">
                            <label>Full Name</label>
                            <span>John Doe</span>
                        </div>
                        <div className="detail-item">
                            <label>Email</label>
                            <span>john.doe@example.com</span>
                        </div>
                        <div className="detail-item">
                            <label>Phone</label>
                            <span>+1 (555) 123-4567</span>
                        </div>
                        <div className="detail-item">
                            <label>Location</label>
                            <span>New York, USA</span>
                        </div>
                        <div className="detail-item">
                            <label>Member Since</label>
                            <span>January 2023</span>
                        </div>
                        <div className="detail-item">
                            <label>Status</label>
                            <span className="status active">Active</span>
                        </div>
                    </div>
                </div>

                <div className="detail-section">
                    <h2>Investment Preferences</h2>
                    <div className="preferences">
                        <div className="preference-item">
                            <h3>Risk Tolerance</h3>
                            <p>Moderate</p>
                        </div>
                        <div className="preference-item">
                            <h3>Investment Horizon</h3>
                            <p>Long-term</p>
                        </div>
                        <div className="preference-item">
                            <h3>Favorite Sectors</h3>
                            <p>Technology, Healthcare</p>
                        </div>
                        <div className="preference-item">
                            <h3>Portfolio Size</h3>
                            <p>$50,000 - $100,000</p>
                        </div>
                    </div>
                </div>

                <div className="detail-section">
                    <h2>Recent Activity</h2>
                    <div className="activity-list">
                        <div className="activity-item">
                            <div className="activity-icon">📈</div>
                            <div className="activity-content">
                                <h4>Bought Reliance Industries</h4>
                                <p>100 shares at ₹2,850 each</p>
                            </div>
                        </div>
                        <div className="activity-item">
                            <div className="activity-icon">📉</div>
                            <div className="activity-content">
                                <h4>Sold TCS</h4>
                                <p>50 shares at ₹3,420 each</p>
                            </div>
                        </div>
                        <div className="activity-item">
                            <div className="activity-icon">💰</div>
                            <div className="activity-content">
                                <h4>Dividend Received</h4>
                                <p>₹1,250 from Infosys</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
