import React from 'react';
import Search from '../components/Search';
import Surah from '../components/Surah';
import '../App.css';

function Home(props) {
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
                        <Search/>
                        <Surah/>
                    </div>
                </section>
            </main>
            <div className="circle1"></div>
            <div className="circle2"></div>
        </div>
    );
}

export default Home;