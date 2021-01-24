import React, { useState } from 'react';
import './ImageLinkForm.scss';
//.predict('c0c0ac362b03416da06ab3fa36fb58e3', this.state.input)

function ImageLinkForm({ onInputChange, onBtnSubmit }) {
    

     return(
        <div className="form-box">
            <p>
                {'Detect faces in your pictures.'}
            </p>
            <div className="form-input">
                <input type='text' onChange={onInputChange}/>
                <button onClick={onBtnSubmit}>Scan</button>
            </div>
        </div>
     );
 }

 export default ImageLinkForm;