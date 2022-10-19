import "./app.css";
import axios from 'axios'
import { useEffect, useState } from 'react';
import City from "./City";

function App() {
  const key = "0d433861b4105ae7027f2be177921252";
  const [search, setSearch] = useState("")
  const [city, setCity] = useState()
  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`);
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error(error)
      }
    }
    getApi();
  }, []) //array'in içi boş ise sadece uygulama ilk açıldığında çağırılır. //eğer içinde hook ya da değişken varsa o hook her render edeildiğinde çalışır
  console.log(search)
  return <div className="App">
    <div>
      <div className="mb-3 pt-0">
        <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Placeholder" className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" />
      </div>
      <City />
    </div>
  </div>
}

export default App;
