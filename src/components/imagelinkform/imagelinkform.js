import React from 'react';
import './imagelinkform.css'

const ImageLinkForm=({onInputChange,onButtonSubmit})=>{
    return(
    <div>
        <p className='f3'>
            {'This Brain will detect faces in you pictures'}
           
        </p>
        <div className='center form'>
            <div className='form center pa4 br3 shadow-5'>
            <input type="text" className='f2 pa2 w-70 center' onChange={onInputChange}/>
            <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onButtonSubmit}>Detect</button>
            </div>
        </div>
    </div>
    );

}

export default ImageLinkForm;