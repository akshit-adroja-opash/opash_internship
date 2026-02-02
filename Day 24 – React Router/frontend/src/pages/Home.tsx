import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <header className="hero">
        <h1>Welcome to ShareMarket Hub</h1>
        <p>Your gateway to smart investing and market insights</p>
      </header>

      <section className="market-overview">
        <h2>Market Overview</h2>
        <div className="market-indices">
          <div className="index-card">
            <h3>NSE Nifty 50</h3>
            <span className="price">22,500.75</span>
            <span className="change positive">+1.25%</span>
          </div>
          <div className="index-card">
            <h3>BSE Sensex</h3>
            <span className="price">73,800.50</span>
            <span className="change negative">-0.85%</span>
          </div>
        </div>
      </section>

      <section className="trending-stocks">
        <h2>Trending Stocks</h2>
        <div className="stocks-grid">
          <div className="stock-card">
            <h4>Reliance Industries</h4>
            <span className="price">₹2,850.00</span>
            <span className="change positive">+2.15%</span>
          </div>
          <div className="stock-card">
            <h4>TCS</h4>
            <span className="price">₹3,420.50</span>
            <span className="change positive">+1.80%</span>
          </div>
          <div className="stock-card">
            <h4>Infosys</h4>
            <span className="price">₹1,650.25</span>
            <span className="change negative">-0.95%</span>
          </div>
          <div className="stock-card">
            <h4>HDFC Bank</h4>
            <span className="price">₹1,720.00</span>
            <span className="change positive">+0.75%</span>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose ShareMarket Hub?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Real-time Data</h3>
            <p>Get live market updates and analysis</p>
          </div>
          <div className="feature-card">
            <h3>Portfolio Tracking</h3>
            <p>Monitor your investments in real-time</p>
          </div>
          <div className="feature-card">
            <h3>Expert Insights</h3>
            <p>Access professional market analysis</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
