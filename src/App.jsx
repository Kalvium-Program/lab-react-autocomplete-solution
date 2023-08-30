import { useState } from "react";
import data from "./resources/countryData.json";
import "./App.css"

export default function App() {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
  };

  const handleKey = (e)=>{
    if(e.key==="Escape"){
      console.log(e.key)
      document.getElementById("dropdown").style.display = "none";
    }
    else{
      document.getElementById("dropdown").style.display = "inline";
    }
  }

  return (
    <div className="App">
      <h1>Search</h1>

      <div>
        <div>
          <input type="text" value={value} onChange={onChange} onKeyDown={handleKey} />
          <button onClick={() => onSearch(value)}> Search </button>
        </div>
        <div id="dropdown">
          {data
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              const fullName = item.name.toLowerCase();

              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => onSearch(item.name)}
                key={item.name}
              >
                {item.name}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
