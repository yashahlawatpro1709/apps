import React from 'react';

export default function Searchbox() {
  return (
    <div className='px-10 flex justify-center items-center mb-10'>
      <input
        type="text"
        placeholder='To know more, drop your business email'
        className='w-[500px] sm:px-5 h-12 border border-gray-300 rounded-lg px-10 focus:outline-none focus:border-purple-400'
      />
      <button className="bg-violet-600 py-2 px-4 text-sm sm:text-base text-white my-7px rounded-lg ml-3">
        Schedule a call
      </button>
    </div>
  );
}
