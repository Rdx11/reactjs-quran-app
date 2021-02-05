import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import '../App.css';
import SkeletonDetail from './skeleton/SkeletonDetail';

function DetailSurah() {
    const [dsurahs, setDsurahs] = useState([]);
    const[loading, setLoading] = useState(false);
    let {identifier} = useParams();
    const getDsurahs = async () => {
        let response = await axios.get(`https://al-quran-8d642.firebaseio.com/surat/${identifier}.json?print=pretty`);
        setDsurahs(response.data);
    }

    function Ayat(params) {
        return(
            dsurahs.map((dsurah, index) => {
                return (
                    <div className="card" key={index}>
                        <h2>{dsurah.nomor}.</h2>
                        <div className="card-ayat"> 
                            <h2>{dsurah.ar}</h2>
                            <p>"{dsurah.id}"</p>
                        </div>
                    </div>
                )
            })
        );
    }

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            getDsurahs();
            setLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, [identifier]);
    
    return (
        <div className="detail-surah">
            <NavLink to='/' className='button'>Back</NavLink>
            {loading && <SkeletonDetail/>}
            {!loading && (
                <Ayat/>
            )}
        </div>
    );
}

export default DetailSurah;