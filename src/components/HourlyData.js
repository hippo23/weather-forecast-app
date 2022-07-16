import WeeklyCard from './WeeklyCard';

const HourlyData = (props) => {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full row-span-3 text-black">
      <div className="w-full flex items-center justify-between">
        <h3 className="font-bold lg:text-xl text-md">
          Weekly Forecast
        </h3>
        <h4>
          <a className="text-blue-400 lg:text-md text-sm" href="#">More detail
            <span className="inline-flex px-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </span>
          </a>
        </h4>
      </div>
      <div className="h-5/6 w-full grid grid-cols-3 grid-rows-2 gap-4 mt-8">
        <WeeklyCard date={props.forecast.list ? props.forecast.list[0].dt : ''} temp={props.forecast.list ? props.forecast.list[0].main.temp : ''} />
        <WeeklyCard date={props.forecast.list ? props.forecast.list[8].dt : ''} temp={props.forecast.list ? props.forecast.list[8].main.temp : ''} />
        <WeeklyCard date={props.forecast.list ? props.forecast.list[16].dt : ''} temp={props.forecast.list ? props.forecast.list[16].main.temp : ''} />
        <WeeklyCard date={props.forecast.list ? props.forecast.list[24].dt : ''} temp={props.forecast.list ? props.forecast.list[24].main.temp : ''} />
        <WeeklyCard date={props.forecast.list ? props.forecast.list[32].dt : ''} temp={props.forecast.list ? props.forecast.list[32].main.temp : ''} />
        <WeeklyCard date={props.forecast.list ? props.forecast.list[39].dt : ''} temp={props.forecast.list ? props.forecast.list[39].main.temp : ''} />
      </div>
    </div>
  )
}

export default HourlyData;
