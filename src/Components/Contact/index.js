import React from "react";
import { MdOutlineEmail , MdOutlinePhoneInTalk} from "react-icons/md";

function Index() {
  return <div>
<section className="bg-white ">
    <div className="container px-6 py-12 mx-auto">

        <div className="grid grid-cols-1 gap-5 mt-10 lg:grid-cols-3">
            <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-1 text-center shadow-md p-5 rounded-lg bg-gray-100 md:p-8">
                <div className="mb-5">
                    <span className="inline-block p-3 text-gray-200 rounded-full bg-red-600	 ">
                        <MdOutlineEmail className="w-6 h-6"/>
                    </span>

                    <h2 className="mt-4 text-base font-medium text-gray-800 ">Email</h2>
                    <p className="mt-2 text-sm text-gray-500 ">Our friendly team is here to help.</p>
                    <p className="mt-2 text-sm text-red-500 ">hello@merakiui.com</p>
                </div>
                <hr />
                <div className="mt-5">
                    <span className="inline-block p-3 text-gray-200 rounded-full bg-red-600">
                        <MdOutlinePhoneInTalk className="w-6 h-6"/>
                    </span>
                    
                    <h2 className="mt-4 text-base font-medium text-gray-800 ">Phone</h2>
                    <p className="mt-2 text-sm text-gray-500 ">Mon-Fri from 8am to 5pm.</p>
                    <p className="mt-2 text-sm text-red-500 ">+1 (555) 000-0000</p>
                </div>
            </div>

            <div className="overflow-hidden rounded-lg lg:col-span-2 h-auto shadow-md p-4 py-6 bg-gray-100 md:p-8">
                <form>
                    <div className="-mx-2 md:items-center md:flex">
                        <div className="flex-1 px-2">
                            <label className="block mb-2 text-sm text-gray-600 ">First Name</label>
                            <input type="text" placeholder="John " className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className="flex-1 px-2 mt-4 md:mt-0">
                            <label className="block mb-2 text-sm text-gray-600 ">Last Name</label>
                            <input type="text" placeholder="Doe" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                    </div>

                    <div className="mt-4">
                        <label className="block mb-2 text-sm text-gray-600 ">Email address</label>
                        <input type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div className="w-full mt-4">
                        <label className="block mb-2 text-sm text-gray-600 ">Message</label>
                        <textarea className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56  focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                    </div>

                    <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        Send message
                    </button>
                </form>
            </div>
        </div>
    </div>
</section>
</div>;
}

export default Index;
