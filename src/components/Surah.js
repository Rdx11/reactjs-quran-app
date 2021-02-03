import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Surah() {
  const [surahs, setSurahs] = useState([]);
  const getSurahs = async () => {
    try {
      let response = await axios.get('https://al-quran-8d642.firebaseio.com/data.json?print=pretty');
      setSurahs(response.data)
    } catch (e) {
      console.log(e.message);
    }
  }
  
  function Card() {
    return (
      surahs.map((surah, index) => {
        return (
          <div className="cards" key={index}>
            <div className="card">
              <img src={process.env.PUBLIC_URL + "/Qimg.png"} alt="" className="logo"/>
              <div className="card-info">
                <a href="https://al-quran-8d642.firebaseio.com/data.json?print=pretty"><h2>{surah.nama} ({surah.asma})</h2></a>
                <p>Count of surah : {surah.ayat}</p>
                <p>Place: {surah.type}</p>
              </div>
            </div>
          </div>
        )
      })
    )
  }

  useEffect(() => {
    getSurahs()
  },[])
    
  return (
      <Card/>
  );
}

export default Surah;