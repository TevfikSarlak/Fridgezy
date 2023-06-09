import React from "react";
import { useState, useEffect, useMemo } from 'react';
import { Skeleton } from '@mui/material';

export default function Intro(props) {
  
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      // Load images and track when they finish loading
      const images = Array.from(document.querySelectorAll(".intro-image"));
      const promises = images.map((image) => {
        return new Promise((resolve) => {
          image.onload = resolve;
        });
      });
  
      // Set loading state to false when all images have loaded
      Promise.all(promises).then(() => {
        setIsLoading(false);
      });
  
      // Cleanup: remove onload event listener
      return () => {
        images.forEach((image) => {
          image.onload = null;
        });
      };
    }, []);

    

    const renderImage = (src) => {
      return (
        <div className="w-1/2 p-1 md:p-2">
          {!isLoading ? (
            <img
              src={src}
              alt="Intro image"
              className="block h-full w-full rounded-lg object-cover object-center intro-image"
            />
          ) : (
            <Skeleton variant="rectangular" width={210} height={118} />
          )}
        </div>
      );
    };

  const renderedImages = useMemo(() => {
    return [
      "/images/Intro-three.jpg",
      "/images/Intro-two.jpg",
      "/images/Intro-four.jpg",
      "/images/Intro-five.jpg",
      "/images/Intro-six.jpg",
      "/images/Intro-seven.jpg"
    ].map((src, index) => <React.Fragment key={index}>{renderImage(src)}</React.Fragment>);
  }, [isLoading]);

  return (
    <div className="w-full mt-24">
      <div className="flex flex-col md:grid md:grid-cols-2 space-y-4">
        <div className="mx-auto ">
          { !isLoading ? ( 
            <img
              src="/images/Intro-one.jpg"
              alt="Intro-one"
              className="h-96 drop-shadow-2xl intro-image rounded-md intro-image"
            />
          ) : (
            <Skeleton variant="rectangular" width={210} height={315} />
          )}  
        </div>

        <div className="mx-auto font-carlito">
          <h1 className="pt-16 text-4xl md:text-6xl text-slate-700 font-extrabold mb-6">
            FR<span className="text-green-700">ID</span>GE<span className="text-orange-700">ZY</span>
          </h1>
          <p className="text-2xl md:text-3xl text-slate-500 font-thin mb-12">
            "YOUR MEAL ADVISOR"
          </p>
          <h3 className="text-green-700 text-2xl md:text-3xl font-semibold font-carlito mb-6">
            Just write what is in your fridge
          </h3>
          <h1 className="text-xl md:text-2xl text-orange-700 font-semibold font-carlito">
            and see what you can cook
          </h1>
        </div>
      </div>

      <div className="flex flex-col justify-center mx-auto md:grid md:grid-cols-2 mt-24 mb-8 ">
        <div className="space-y-4 pt-24">
          <h3 className="font-carlito text-2xl md:text-3xl text-slate-700 mx-auto font-semibold mb-8">
            Open app and write ingredients
          </h3>
          <p className="ml-16 md:ml-32 text-left text-3xl md:text-4xl text-orange-400 font-thin mb-6">
            YOU WILL SEE:
          </p>
          <ul className="list-disc text-slate-400 ml-8 md:ml-32 text-left font-carlito">
            <li className="mb-6">what are your <span className="text-green-500 font-semibold">missing ingredients</span> to cooking</li>
            <li className="mb-6">what are your <span className="text-orange-500 font-semibold">unused ingredients</span></li>
            <li className="mb-6">and you can get <span className="text-slate-700 font-semibold">instructions</span></li>
          </ul>
        </div>

        <div>
          <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24 drop-shadow-2xl">
            {!isLoading ? (
              <div class="-m-1 flex flex-wrap md:-m-2">
                <div class="flex w-1/2 flex-wrap">
                  <div class="w-1/2 p-1 md:p-2">
                    <img
                      alt="Intro-three"
                      class="block h-full w-full rounded-lg object-cover object-center intro-image"
                      src="/images/Intro-three.jpg"
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img
                      alt="Intro-two"
                      class="block h-full w-full rounded-lg object-cover object-center intro-image"
                      src="/images/Intro-two.jpg"
                    />
                  </div>
                  <div class="w-full p-1 md:p-2">
                    <img
                      alt="Intro-four"
                      class="block h-full w-full rounded-lg object-cover object-center intro-image"
                      src="/images/Intro-four.jpg"
                    />
                  </div>
                </div>
                <div class="flex w-1/2 flex-wrap">
                  <div class="w-full p-1 md:p-2">
                    <img
                      alt="Intro-five"
                      class="block h-full w-full rounded-lg object-cover object-center intro-image"
                      src="/images/Intro-five.jpg"
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img
                      alt="Intro-six"
                      class="block h-full w-full rounded-lg object-cover object-center intro-image"
                      src="/images/Intro-six.jpg"
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img
                      alt="Intro-seven"
                      class="block h-full w-full rounded-lg object-cover object-center intro-image"
                      src="/images/Intro-seven.jpg"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                <Skeleton variant="rectangular" width={210} height={118} />
                <Skeleton variant="rectangular" width={210} height={118} />
                <Skeleton variant="rectangular" width={210} height={118} />
                <Skeleton variant="rectangular" width={210} height={118} />
                <Skeleton variant="rectangular" width={210} height={118} />
                <Skeleton variant="rectangular" width={210} height={118} />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-24 flex flex-col justify-center items-center">
        <p className="text-2xl md:text-4xl font-thin font-carlito text-orange-700 mb-12">
          Let's click and ...
        </p>
        <button
          onClick={() => props.handleStartButton()}
          className="bg-green-700 border-2 border-green-700 text-white font-semibold rounded-md px-24 md:px-16 py-4 shadow-lg font-carlito hover:border-2 hover:border-orange-700 hover:text-orange-700 hover:bg-white hover:font-semibold active:bg-orange-300 active:duration-75 active:text-white"
        >
          Find Your Meal
        </button>
      </div>
    </div>
  );
}
