const WeeklyCard = (props) => {
  let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
  return (
    <div className="flex flex-col rounded-xl items-center justify-around bg-black/5 h-full w-full p-4">
      <div className="flex sm:flex-row flex-col items-center justify-between h-3/6 w-full">
        <div className="">
          <h1 className="font-bold lg:text-xl text-xs">
            {props.data ? (Math.round((props.data.main.temp - 273.15) * 100) / 100) + ' °C' : ''}
          </h1>
          <h2 className="text-xs">
            {props.data ? props.data.weather[0].main : ''}
          </h2>
        </div>
        <img className="lg:h-20 lg:w-20 h-10 w-10" src={require('../assets/cloudy.png')} alt="hatdog" />
      </div>
      <div className="h-3/6 w-full flex flex-col pt-3 sm:flex-row font-bold text-sm sm:text-md lg:text-lg sm:justify-start items-center justify-end">
        <h1>
          {props.data ? days[(new Date(props.data.dt * 1000)).getDay()] : ''}
        </h1>
      </div>
    </div>
  )
}

export default WeeklyCard;
