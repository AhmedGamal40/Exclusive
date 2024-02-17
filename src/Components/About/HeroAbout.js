import React from "react";

function HeroAbout() {
  return <>
    <section className="bg-white ">
    <div className="container px-6 py-10 mx-auto">
        <div className="lg:-mx-6 lg:flex lg:items-center">

            <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
                <p className="text-5xl font-semibold text-red-600 ">“</p>

                <h1 className="text-2xl font-semibold text-gray-800  lg:text-3xl lg:w-96">
                    Help us improve our productivity
                </h1>

                <p className="max-w-lg mt-6 text-gray-700  mb-3">
                    “ Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
                    tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa
                    aperiam dolorum, obcaecati corrupti aspernatur a. ”
                </p>
            </div>
            <img className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]" src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
        </div>
    </div>
</section>
  </>;
}

export default HeroAbout;
