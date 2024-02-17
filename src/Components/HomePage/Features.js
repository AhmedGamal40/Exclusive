import React from 'react';
import one from '../../Assets/Images/one.jpg';
import two from '../../Assets/Images/two.jpg';
import three from '../../Assets/Images/three.jpg';
import TitleNav from '../../Assets/Shared/TitleNav';

function Features() {
  return (
    <section className="text-gray-600 body-font">
      <TitleNav title={'New Arrival'} name={'Featured'}/>
      <section>
        <div className="mx-auto  ">
          <ul className=" grid grid-cols-1 gap-4 lg:grid-cols-3">

            <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <a href="##" className="group relative block">
                <img
                  src={one}
                  alt=""
                  className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">Skinny Jeans Blue</h3>
                  <span
                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    Shop Now
                  </span>
                </div>
              </a>
            </li>

            <li>
              <a href="##" className="group relative block">
                <img
                src={two}
                  alt=""
                  className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">Casual Trainers</h3>
                  <span
                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    Shop Now
                  </span>
                </div>
              </a>
            </li>

            <li>
              <a href="##" className="group relative block">
                <img
                src={three}
                  alt=""
                  className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">Winter Jumpers</h3>
                  <span
                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    Shop Now
                  </span>
                </div>
              </a>
            </li>

          </ul>
        </div>
      </section>
    </section>
  );
}

export default Features;
