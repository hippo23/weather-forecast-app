const WeeklyCard = (props) => {
  let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thrus', 'Fri', 'Sat'];
  return (
    <div className="flex flex-col rounded-xl items-center justify-around bg-black/5 h-full w-full p-4">
      <div className="flex items-center justify-between h-3/6 w-full">
        <div>
          <h1 className="font-bold text-xl">
            {(Math.round((props.temp - 273.15) * 100) / 100) + ' °C'}
          </h1>
          <h2 className="text-xs">
            Cloudy
          </h2>
        </div>
        <img className="lg:h-20 lg:w-20 h-12 w-12" src={require('../assets/cloudy.png')} alt="hatdog" />
      </div>
      <div className="h-3/6 w-full flex flex-col justify-end">
        <h1>
          {days[(new Date(props.date * 1000)).getDay()]}
        </h1>
      </div>
    </div>
  )
}

export default WeeklyCard;
