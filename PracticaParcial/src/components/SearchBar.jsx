import { useState } from "react";
import { useEffect } from "react";

export default function SearchBar({ onSearch, onSelectSeries }) {
    const [inputValue, setInputValue] = useState("");
    const [suggestions, setSuggestions] = useState([]);

useEffect(() => {
if (inputValue.trim() === "") {
    setSuggestions([]);
    return;
}

// para que en la barra de busqueda no se sobrecargue, añadimos un pequeño delay antes de enseñar los resultados buscados
const delay = setTimeout(() => {
    fetch(`https://api.tvmaze.com/search/shows?q=${inputValue}`)
    .then((res) => res.json())
    .then((data) =>
    setSuggestions(data.map((d) => d.show))
    );
}, 300);

return () => clearTimeout(delay);
}, [inputValue]);

const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(inputValue);
    setSuggestions([]);
};

const pickSuggestion = (serie) => {
    setInputValue(serie.name);
    setSuggestions([]);
    onSelectSeries(serie);
};

  return (
      <div className="searchbar-wrapper">
          <form onSubmit={handleSubmit}>
              <input
              type="text"
              placeholder="Buscar serie..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              />
              <button type="submit">Buscar</button>
          </form>
          
          {/*Comprobar que lo escrito dea valido*/}
          {suggestions.length > 0 && (
          <ul className="suggestions-list">
              {suggestions.map((s) => (
                  <li key={s.id} className="suggestion-item"
                      onClick={() => pickSuggestion(s)}>
                      <img
                          src={s.image ? s.image.medium : "https://via.placeholder.com/90x120"}
                          alt={s.name}
                      />
                      <span>{s.name}</span>
                  </li>
              ))}
          </ul>
          )}
      </div>
      );
}
