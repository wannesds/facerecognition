import React from 'react';
import './ImageLinkForm.scss';


 const ImageLinkForm = () => {
     return(
        <div className="form-box">
            <p>
                {'Detect faces in your pictures.'}
            </p>
            <div>
                <input type='text'/>
                <button>Scan</button>
            </div>
        </div>
     );
 }

 export default ImageLinkForm;