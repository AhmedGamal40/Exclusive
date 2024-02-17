import React from 'react';

function TitleNav({title , name}) {
return (
<>
    <div className="container mx-auto my-5">
    <div className="flex items-center space-x-5 mx-5">
        <div className="w-3 h-8 bg-red-500 rounded-sm"></div>
        <p className="font-semibold text-red-500">{name}</p>
    </div>
    <div className="flex justify-between items-center space-x-5 m-5">
        <h1 className="text-2xl font-bold text-black">{title}</h1>
        <button className="px-6 py-2 text-xs font-medium uppercase text-white bg-red-500 rounded-md">
            View All
        </button>
    </div>
</div>
</>
);
}

export default TitleNav;
