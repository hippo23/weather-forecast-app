import SearchBar from './SearchBar'

const Header = (props) => {

  return (
    <div className="row-span-1 flex flex-row items-center justify-between w-full border border-0 border-black/5 border-b-2 text-black">
      <div className="flex flex-col">
        <h1 className="font-bold lg:text-2xl text-xl">
          January 2022
        </h1>
        <h3 className="text-gray-400 text-sm pt-1">
          Thursday, Jan 4, 2022
        </h3>
      </div>
      <SearchBar onLocationChange={props.onLocationChange} />
    </div>
  )
}

export default Header;
