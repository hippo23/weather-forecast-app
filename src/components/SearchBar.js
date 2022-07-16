import React, { useState, useEffect } from "react";

const SearchBar = (props) => {



  return (
    <div className="min-h-[50px] flex rounded p-4">
      <form className="h-full w-full flex justify-center items-center" onSubmit={props.onLocationChange}>
        <input className="leading-[100%] bg-black/5 rounded text-slate-700 h-full ease-in-out duration-200 placeholder-gray-400 appearance-none outline-none py-2 px-4 font-normal" id="username" type="text" placeholder="Location" size="20" />
        <button type='submit' name='submit_create' className="cursor-pointer bg-inherit rounded text-white font-normal font-bold py-2 px-4 outline-none focus:shadow-outline">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </form>
    </div>
  )
}

export default SearchBar;
