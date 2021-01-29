import React from 'react';
import './ImageLinkForm.scss';

function ImageLinkForm({ onInputChange, onBtnSubmit }) {
    

     return(
        <div className="form-box">
            <p>
                {'Detect faces in your pictures.'}
            </p>
            <div className="form-input">
                <input className='input-form' type='text' onChange={onInputChange}/>
                <button onClick={onBtnSubmit}>Scan</button>
            </div>
        </div>
     );
 }

 export default ImageLinkForm;