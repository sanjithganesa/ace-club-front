'use client'
import React from 'react';

const MyComponent = () => {
  return (
    <div>
      <style jsx>{`
        #pseudo {
          width: 50px;
          height: 50px;
          position: absolute;
          top: 310px;
          right: 10px;
          border-radius: 25px;
          background: transparent;
          background-repeat: none;
          box-shadow: 0 0 50px 150px rgba(245, 4, 173, 0.267);
          z-index: 0;
        }
        .ellipse {
          border-radius: 50%;
          border: rgba(255, 255, 255, 0.137) solid 1px;
          position: absolute;
        }
        #svg2 {
          position: absolute;
          top: 75%;
          left: 50%;
          transform: rotate(-45deg);
        }
        #e1 {
          width: 1280px;
          height: 350px;
          top: 30%;
          left:2.5%;
          transform: rotate(8deg);
        }
        #e2 {
          width: 896px;
          height: 245px;
          top: 38%;
          left: 15%;
          transform: rotate(8deg);
        }
        #e3 {
          width: 1920px;
          height: 525px;
          top: 17%;
          left: -20%;
          transform: rotate(8deg);
        }
        #circle2 {
          width: 10px;
          height: 10px;
          position: absolute;
          top: -20px;
          left: 300px;
          border-radius: 50%;
          box-shadow: 0 0 100px 150px rgba(28, 218, 113, 0.514), 0 0 100px 150px rgba(28, 218, 113, 0.514) inset;
          z-index: 0;
        }
      `}</style>
      <div className="ellipse" id="e1"></div>
      <div className="ellipse" id="e2"></div>
      <div className="ellipse" id="e3"></div>
      <div className="w-[200px] h-[200px] absolute right-[-50px] top-[250px] bg-[linear-gradient(to_top_left,rgb(94,14,114),rgb(192,37,192),white)] shadow-[0_0_50px_100px_rgba(13,13,202,0.156)] z-[1] rounded-[100px] ;
        background-repeat: none;"></div>
      <div className="w-[100px] h-[100px] absolute left-[180px] top-[300px] bg-[linear-gradient(to_right,rgb(221,63,15),rgb(189,133,12),rgb(248,244,27))] z-[1] rounded-[50px] ;
        background-repeat: none;"></div>
      <div id="circle2"></div>
      <div id="pseudo"></div>
    </div>
  );
};

export default MyComponent;
