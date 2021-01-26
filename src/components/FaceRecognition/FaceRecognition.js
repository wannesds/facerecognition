import React from 'react';
import './FaceRecognition.scss';


 const FaceRecognition = ({ imageUrl, box }) => {
     return(
        <div className="facerecognition-box">
            <div className="image-box">
                <img id='inputimage' alt="scanned photo" src={imageUrl}/>
                <div className="bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
        </div>
     );
 }

 export default FaceRecognition;