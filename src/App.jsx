import { useEffect, useState } from 'react'

const api = {
  key:'b6b1c6578b50c85adafe8ddda7c47bc9',
  base:'https://api.openweathermap.org/data/2.5/'
}

const backGroundImg = {
  'Clouds':"https://images.pexels.com/photos/268917/pexels-photo-268917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  'Clear':"https://images.pexels.com/photos/1574181/pexels-photo-1574181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  'Rain':"https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg",
  'Mist':"https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  'Haze':"https://images.pexels.com/photos/3099153/pexels-photo-3099153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  'Drizzle':"https://media.istockphoto.com/id/1388636452/photo/rain-drop-infront-of-mango-bud.jpg?s=1024x1024&w=is&k=20&c=ZiTSjzn40BxqjPL0_3-f-7x0y_pmKqDtaPTo6j83RKk=",
  'Sunny':"https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  'Storm':"https://images.pexels.com/photos/1030320/pexels-photo-1030320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  'Fog':"https://images.pexels.com/photos/163323/fog-dawn-landscape-morgenstimmung-163323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  'Snow':"https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

}
function App() {

  const [input, setInput] = useState()
  const [weather,setWeather] = useState({})
  const [weatherType,setWeatherType] = useState()

  

  const search = e =>{
    if (e.key == "Enter"){
      fetch(`${api.base}weather?q=${input}&units=metric&APPID=${api.key}`)
      .then((response) => response.json())
      .then((data) => {
          setWeather(data)
          setWeatherType(data.weather[0].main)
          setInput('')
          // console.log(data);
          // console.log(weather);
          console.log(backGroundImg[weatherType]);
        })
      }
    }
    // getting the link of background image from backgroundImg using "weatherType" from the fetch api call.
    const bgImage = backGroundImg[weatherType]

  return (
    <div className={`w-full bg-blue-500 bg-cover bg-center h-screen flex flex-col items-center px-5`} 
      style={{backgroundImage:`url(${bgImage})`, backgroundSize:'cover', backgroundPosition:'center'}}
      >
        <div className='w-full max-w-3xl'>
          <input 
            type="text" 
            placeholder='Enter the city name...'
            value={input}
            onChange={(event)=>setInput(event.target.value)}
            onKeyPress={search}
            className='w-full h-9 sm:h-12 p-2  rounded-b-xl outline-none '
            />
          </div>
        {
          typeof weather.main != 'undefined' ? 
          ( 
          <div className='w-full max-w-sm border-2 p-4 rounded mt-10 bg-white/40 flex flex-col gap-4'>
            <h1 className='text-3xl font-bold text-center'>{weather.weather[0].main}</h1>
            <h1 className='text-2xl font-bold text-center'>{weather.name}, {weather.sys.country}</h1>
            <p className='text-center font-bold text-xl'>Temp {weather.main.temp}°C </p>

          </div>
        )
         : 
         ""
        }
       
    </div>
  )
}

export default App
