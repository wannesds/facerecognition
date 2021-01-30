import React from 'react';
import './Rank.scss';


 const Rank = ({name, entries}) => {
     
     return(
        <div className="rank-box">
            <div className="rank-text">
                {`${name}, your current entry count is...`}
            </div>
            <div className="rank-num">
                {entries}
            </div>
        </div>
     );
 }

 export default Rank;