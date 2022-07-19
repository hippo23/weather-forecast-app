import WeeklyCard from './WeeklyCard';

const HourlyData = (props) => {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full row-span-3 text-black">
      <div className="w-full flex items-center justify-between pb-4">
        <h3 className="font-bold lg:text-xl text-sm">
          Weekly Forecast
        </h3>
        <h4>
          <a className="text-blue-400 lg:text-md text-sm" href="#">{props.forecast.city ? props.forecast.city.name + ', ' + props.forecast.city.country : ''}
            <span className="inline-flex px-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </a>
        </h4>
      </div>
      <div className="h-5/6 w-full grid grid-cols-3 grid-rows-2 gap-4">
        <WeeklyCard data={props.forecast.list ? props.forecast.list[0] : ''} />
        <WeeklyCard data={props.forecast.list ? props.forecast.list[8] : ''} />
        <WeeklyCard data={props.forecast.list ? props.forecast.list[16] : ''} />
        <WeeklyCard data={props.forecast.list ? props.forecast.list[24] : ''} />
        <WeeklyCard data={props.forecast.list ? props.forecast.list[32] : ''} />
        <WeeklyCard data={props.forecast.list ? props.forecast.list[39] : ''} />
      </div>
    </div>
  )
}

export default HourlyData;
