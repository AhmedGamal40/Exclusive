import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown  } from "react-icons/md";
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function MiniNavbar() {
  const [selectLanguage , setSelectedLanguage] = useState('English');
  const HandelSelectLang = (language) => {
    setSelectedLanguage(language)
  }
  return( 
  <div className="bg-black p-3">
  <div className="container mx-auto flex flex-col justify-center  text-slate-200">
    <div className="text-center mb-3 lg:mb-0 lg:text-left lg:flex justify-around">
      <p className="mb-2 lg:mb-0 text-sm">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span className="text-white text-semibold font-bold text-md underline  ml-2">Shop Now</span> 
      </p>
      <div className=" flex justify-center lg:mx-5 ">
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold    ">
          {selectLanguage}
          <MdOutlineKeyboardArrowDown className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="##"
                  onClick={() => HandelSelectLang('English')}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  English
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="##"
                  onClick={() => HandelSelectLang('العربيه')}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  العربيه
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
      </div>
    </div>
  </div>
</div>
  );
}

export default MiniNavbar;



