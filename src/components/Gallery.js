import React from "react";
import { importAllImages } from "../utils/utils";
import "./Gallery.css"

function Gallery(){

    const images = importAllImages(
        require.context(
            "./assets",
            false,
            /\.(png|jpe?g|svg)$/
        )
    )
    return(
        <div className="gallery-wrapper">
            {Object.values(images).map((value,index) => (
                <div className="gallery-item" key={index} >
                    <img src={value} alt='tours gallery' />
                </div>
            ))}

        </div>
    );

}
export default Gallery