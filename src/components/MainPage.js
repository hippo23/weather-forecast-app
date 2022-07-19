import Header from './Header';
import Overview from './Overview';
import HourlyData from './HourlyData'

const MainPage = (props) => {

  return (
    <div className="grid grid-rows-6 z-20  h-auto min-h-screen w-full col-span-10 px-6 gap-6">
      <Header onLocationChange={props.onLocationChange} data={props.data} />
      <Overview data={props.data} />
      <HourlyData forecast={props.forecast} />
    </div >
  )
}

export default MainPage;
