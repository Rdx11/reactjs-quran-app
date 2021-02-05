import React from 'react';
import Skeleton from 'react-loading-skeleton';
import '../../App.css';

function SkeletonSurah(props) {
    return (
        <section>
            {Array(5)
                .fill()
                .map((item, index) => (
                    <div className="card">
                        <Skeleton variant="circle" width={20} height={20} />
                        <div className="card-info">
                        <h2><Skeleton width={250} height={15}/></h2>
                        <p><Skeleton width={120} height={5}/></p>
                        </div>
                    </div>
                ))}
      </section>
    );
}

export default SkeletonSurah;