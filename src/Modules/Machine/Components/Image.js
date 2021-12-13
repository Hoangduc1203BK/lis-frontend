import React, { useEffect } from "react";
import Axios from "axios"
import "./FormMachine.scss"
import Service from "../Shared/Machine.service";
import {useRef, useState} from 'react';
function Image() {
  const modalRef=useRef();
  const img1Ref=useRef();
  const img2Ref=useRef();
  const closeRef=useRef();
  const handleClickOpen=()=>{
    modalRef.current.style.display="block"
    img2Ref.current.src=img1Ref.current.src;
    img2Ref.current.alt=img1Ref.current.alt
  }
  const [image,setImage] =useState([]);
  useEffect(async ()=>{
    const response = await Service.getImage("20211205072251","20211213072251");
    setImage(response.data);
  },[])
  const handleClickClose=()=>{
    modalRef.current.style.display="none"
  }
  return (
      <div className="image_grid">
        {image.map((item,index) => (
          <div key={index}>
            <img  ref={img1Ref}
                src={`http://34.124.209.6${item.link}`}
                // alt={item.title}
                onClick={handleClickOpen}
            />
            <p>{item.title} by:{item.author}</p>
          </div>
        ))}
        <div ref={modalRef}  className="modal">
            <span ref={closeRef} onClick={handleClickClose} className="close">&times;</span>
            <img ref={img2Ref} className="modal-content" />
        </div>
    </div>
  );
}
export default Image;
