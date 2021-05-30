import React from 'react';

const FaceRecognation = ({ImageUrl}) =>{
    return(
        <div className="center pa3 ma3">
            <div className="absolute mt2">
                <img  id="inputimage" width = "500px" height= "auto" src={ImageUrl} alt=""></img>
            </div>
           
        </div>
    );
}

export default FaceRecognation;