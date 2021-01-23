import React from 'react';
import './Rank.scss';


 const Rank = () => {
     return(
        <div className="rank-box">
            <div className="rank-text">
                {'Wannes, your current rank is...'}
            </div>
            <div className="rank-num">
                {'#5'}
            </div>
        </div>
     );
 }

 export default Rank;