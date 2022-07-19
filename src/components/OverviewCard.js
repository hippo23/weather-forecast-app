
const OverviewCard = (props) => {

  return (
    <div className="flex flex-row items-center justify-start min-h-[70px] bg-black/5 text-black rounded-xl py-6 px-3">
      <div className='flex xs:flex-row flex-col items-center justify-center h-full lg:min-w-[100px]'>
        <div className="flex items-center justify-center lg:min-h-[4vh] lg:min-w-[4vw] min-h-[2vh] min-w-[2vw] mr-2">
          {props.vector}
        </div>
        <div className="w-auto flex flex-col ml-2">
          <h2 className="whitespace-nowrap text-xs">
            {props.property}
          </h2>
          <h1 className="xl:text-4xl lg:text-3xl md:text-lg sm:text-md text-sm font-bold">
            {props.value}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default OverviewCard;
