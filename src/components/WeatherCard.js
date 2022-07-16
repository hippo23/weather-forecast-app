const WeatherCard = (props) => {

  return (
    <div className="flex flex-row items-center justify-start w-full min-h-[70px] bg-white/10 text-white rounded-xl p-6">
      <div className='flex items-center justify-center h-full min-w-[130px]'>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#f5f5f5" viewBox="0 6 32 20">
          <title>cloud</title>
          <path d="M25 10c-0.332 0-0.66 0.023-0.987 0.070-1.867-2.544-4.814-4.070-8.013-4.070s-6.145 1.526-8.013 4.070c-0.327-0.047-0.655-0.070-0.987-0.070-3.859 0-7 3.141-7 7s3.141 7 7 7c0.856 0 1.693-0.156 2.482-0.458 1.81 1.578 4.112 2.458 6.518 2.458 2.409 0 4.708-0.88 6.518-2.458 0.789 0.302 1.626 0.458 2.482 0.458 3.859 0 7-3.141 7-7s-3.141-7-7-7zM25 22c-1.070 0-2.057-0.344-2.871-0.917-1.467 1.768-3.652 2.917-6.129 2.917s-4.662-1.148-6.129-2.917c-0.813 0.573-1.801 0.917-2.871 0.917-2.762 0-5-2.238-5-5s2.238-5 5-5c0.676 0 1.316 0.138 1.902 0.38 1.327-2.588 3.991-4.38 7.098-4.38s5.771 1.792 7.096 4.38c0.587-0.242 1.229-0.38 1.904-0.38 2.762 0 5 2.238 5 5s-2.238 5-5 5z" />
        </svg>
        <div className="flex flex-col ml-2">
          <h2 className="">
            Mon
          </h2>
          <h1 className="xl:text-4xl font-bold">
            29°
          </h1>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard;
