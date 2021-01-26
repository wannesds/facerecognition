import React from 'react';
import './FaceRecognition.scss';


 const FaceRecognition = ({ imageUrl }) => {
     return(
        <div className="facerecognition-box">
            {
                imageUrl ? 
                    <img id='inputimage' alt="scanned picture" src={imageUrl}/>
                :
                    <p>No image scanned yet</p>
            }
            
        </div>
     );
 }

 export default FaceRecognition;