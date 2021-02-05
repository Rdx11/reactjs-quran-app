import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import SkeletonSurah from './skeleton/SkeletonSurah';

function Surah() {
  const [surahs, setSurahs] = useState([]);
  const [loading, setLoading] = useState(false);
  const getSurahs = async () => {
    try {
      let response = await axios.get(`https://al-quran-8d642.firebaseio.com/data.json?print=pretty`);
      setSurahs(response.data)
    } catch (error) {
      console.log(error.message);
    }
  }
  
  function Card() {
    return (
      surahs.map((surah, index) => {
        return (
          <div className="card" key={index}>
            <img src={process.env.PUBLIC_URL + "/Qimg.png"} alt="quran logo" className="logo"/>
            <div className="card-info">
              <NavLink to={`/detail-surah/${surah.nomor}`}><h2>{surah.nama} ({surah.asma})</h2></NavLink>
              <p>Count of surah : {surah.ayat}</p>
              <p>Place: {surah.type}</p>
            </div>
          </div>
        )
      })
    )
  }

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      getSurahs();
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
    
  return (
    <div>
      {loading && <SkeletonSurah/>}
      {!loading && (
        <Card/>
      )}
    </div>
  );
}

export default Surah;