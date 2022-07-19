import OverviewCard from './OverviewCard';
import { ReactComponent as WeatherSvg } from './../assets/weather.svg';
import { ReactComponent as WindSvg } from './../assets/wind.svg';
import { ReactComponent as PressureSvg } from './../assets/pressure.svg';
import { ReactComponent as TempSvg } from './../assets/temperature.svg';

const Overview = (props) => {

  return (
    <div className="flex flex-col items-center justify-center w-full row-span-2 text-black">
      <div className="w-full flex items-center justify-between pb-4">
        <h3 className="font-bold lg:text-xl md:text-md text-sm">
          Daily Forecast
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
      <div className="w-full grid grid-cols-2 grid-rows-2 gap-4">
        <OverviewCard property="Wind Speed" value={props.data.wind ? props.data.wind.speed + ' km/h' : ''} vector={<WindSvg className="h-10 w-10 fill-sky-500" />} />
        <OverviewCard property="Pressure" value={props.data.main ? props.data.main.pressure + ' hPa' : ''} vector={<PressureSvg className="h-10 w-10 fill-sky-500" />} />
        <OverviewCard property="Weather" value={props.data.weather ? props.data.weather[0].main : ''} vector={<WeatherSvg className="h-10 w-10 fill-sky-500" />} />
        <OverviewCard property="Temperature" value={props.data.main ? Math.round((props.data.main.temp - 273.15) * 100) / 100 + ' °C' : ''} vector={<TempSvg className="h-10 w-10 fill-sky-500" />} />
      </div>
    </div>
  )
}

export default Overview;
