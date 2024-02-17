import React from 'react'
import four from '../../Assets/Images/four.jpg'
function SepatatorImage() {
  return (
    <div className='my-20'>
      <div className="grid h-[30rem] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
        <figure className="relative w-full h-96">
          <img className="object-cover object-center w-full h-full rounded-xl"
            src={four}
            alt="nature" />
          <figcaption
            className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
            <div>
              <h5
                className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Sara Lamalo
              </h5>
              <p className="block mt-2 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                20 July 2022
              </p>
            </div>
            <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Growth
            </h5>
          </figcaption>
        </figure>
      </div>
    </div>
  )
}

export default SepatatorImage