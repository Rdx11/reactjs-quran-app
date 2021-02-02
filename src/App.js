import './App.css';
// import Qlogo from './Qlogo.png';

function App() {
  return (
    <div className="App">
      <main>
        <section className="glass">
          <div className="dashboard">
            <div className="user">
              <img src={process.env.PUBLIC_URL + "/Qlogo.png"} alt="quran logo" className="ava"/>
            </div>
            <div className="links">
              <div className="link">
                <h1>Quran App</h1>
              </div>
            </div>
          </div>
          <div className="df-surah">
            <div className="search">
              <input type="text"/>
            </div>
            <div className="cards">
              <div className="card">
                <img src={process.env.PUBLIC_URL + "/Qimg.png"} alt="" className="logo"/>
                <div className="card-info">
                  <h2>Al-Fatihah</h2>
                  <p>Count: 7</p>
                  <p>Place: Mecca-Makiyah</p>
                </div>
              </div>
              <div className="card">
                <img src={process.env.PUBLIC_URL + "/Qimg.png"} alt="" className="logo"/>
                <div className="card-info">
                  <h2>Al-Fatihah</h2>
                  <p>Count: 7</p>
                  <p>Place: Mecca-Makiyah</p>
                </div>
              </div>
              <div className="card">
                <img src={process.env.PUBLIC_URL + "/Qimg.png"} alt="" className="logo"/>
                <div className="card-info">
                  <h2>Al-Fatihah</h2>
                  <p>Count: 7</p>
                  <p>Place: Mecca-Makiyah</p>
                </div>
              </div>
              <div className="card">
                <img src={process.env.PUBLIC_URL + "/Qimg.png"} alt="" className="logo"/>
                <div className="card-info">
                  <h2>Al-Fatihah</h2>
                  <p>Count: 7</p>
                  <p>Place: Mecca-Makiyah</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="circle1"></div>
      <div className="circle2"></div>
    </div>
  );
}

export default App;
