import "./imageSlider.scss";
import { homeSlideImages } from "../../../../app/data";
import { useEffect, useState } from "react";


const ImageSlider = (props)=>{
     const [images,setImages] = useState([]);
     const [previousImage,setPreviousImage] = useState(null);
     const [selectedIndex,setSelectedIndex] = useState(0);
     
     useEffect(()=>{
         setImages(homeSlideImages);
         setPreviousImage(homeSlideImages[0]);
     },[]);


     const handleMoveImageFoward = ()=>{
          setPreviousImage(images[selectedIndex]);
          if(selectedIndex < (images.length - 1) ){
              setSelectedIndex(selectedIndex + 1);
          }
     }


     const handleMoveImageBackward = ()=>{
         setPreviousImage(images[selectedIndex]);
         if(selectedIndex > 0 ){
            setSelectedIndex(selectedIndex - 1);
         }
     }



     return (
        <div 
          className="imageSlider"
            style={{
               backgroundImage: `url(${previousImage?.path})`,
               backgroundRepeat: 'no-repeat',
               backgroundSize: 'cover'
            }}
          >
             {
                selectedIndex < (images.length - 1)
                ? <div className="imageScrollBtnLeft" onClick={handleMoveImageFoward}>
                     <span className="fa fa-chevron-left fa-3x"></span>
                  </div>
                : <></>
             }
             
             {
                selectedIndex > 0
                ? <div className="imageScrollBtnRight" onClick={handleMoveImageBackward}>
                     <span className="fa fa-chevron-right fa-3x"></span>
                  </div>
                :<></>
             }



             {
               images.map((data,index)=>{
                   return(
                      <div 
                        className="imageSlideItem"
                        style={{
                           width: selectedIndex == index ? '100%' : '0%',
                           backgroundImage: `url(${data.path})`
                        }}
                      >
                         {
                            selectedIndex == index
                            ? <>
                              <span>{data.heading}</span>
                              <span>{data.title}</span>
                              <p>{data.content}</p>

                              <div className="actionButtons">
                                    
                                    <button>
                                       Donate
                                    </button>

                                    <button>
                                       Read More
                                    </button>

                              </div>
                            </>
                            :<></>
                         }

                      </div>
                   )
               })
             }
        </div>
     );
}

export default ImageSlider;
