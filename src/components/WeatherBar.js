import WeatherCard from './WeatherCard';
const WeatherBar = (props) => {

  return (
    <div className="flex bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-600 items-center justify-around z-20 h-full w-full col-span-3 flex-col py-6 px-8">
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
    </div>
  )
}

export default WeatherBar;
