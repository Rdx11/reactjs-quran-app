import React from 'react';
import Skeleton from 'react-loading-skeleton';
import '../../App.css';

function SkeletonSurah(props) {
    return (
        <section>
        {Array(3)
            .fill()
            .map((item, index) => (
              <div className="card-skeleton">
                <Skeleton variant="circle" width={100} height={100} />
                <div className="card-info">
                  <Skeleton width={150} height={15}/>
                  <Skeleton width={120} height={5}/>
                  <Skeleton width={100} height={5}/>
                </div>
              </div>  
            ))}
        </section>
    );
}

export default SkeletonSurah;