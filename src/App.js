import './App.css';
import Surah from './components/Surah';

function App() {
  return (
    <div className="App">
      <main>
        <section className="glass">
          <div className="dashboard">
            <div className="user">
              <img src={process.env.PUBLIC_URL + "/Qlogo.png"} alt="quran logo" className="ava"/>
            </div>
            <div className="dashs">
              <div className="dash">
                <h1>Quran App</h1>
              </div>
            </div>
          </div>
          <div className="df-surah">
            <div className="search">
              <input type="text"/>
            </div>
            <Surah/>
          </div>
        </section>
      </main>
      <div className="circle1"></div>
      <div className="circle2"></div>
    </div>
  );
}

export default App;
