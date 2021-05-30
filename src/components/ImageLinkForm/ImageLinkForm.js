import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm =({OnInputChange,OnButtonSubmit})=>{
    return(
    <div >
        <p className='f3'>
            {`This Magic Brain will detect your faces . Give it a try`}
        </p>
        <div className='center'>
            <div className='form center pa4 br3 shadow-5'>
                <input onChange={OnInputChange} className='f4 pa2 w-70 center' type='text'></input>
                <button onClick={OnButtonSubmit} className='w-30 grow f4 ink ph3 pv2 dib white bg-light-purple'>Detect</button>
                
            </div>       
        </div>  
    </div>
        );
}
export default ImageLinkForm;