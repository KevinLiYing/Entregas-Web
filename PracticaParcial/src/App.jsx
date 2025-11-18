import { useState } from "react";
import { useEffect } from "react";
import SearchBar from "./components/SearchBar";
import SeriesList from "./components/SeriesList";
import SeriesDetail from "./components/SeriesDetails";
import FavoritesList from "./components/FavoriteList";
import "./app.css";

export default function App(){
    // lista de series, series seleccionadas con detalles y localStorage con los favoritos
    const[series, setSeries] = useState([]);
    const [selectedSeries, setSelectedSeries] = useState(null);
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("favorites")) || []);

useEffect(() => {localStorage.setItem("favorites", JSON.stringify(favorites));}, [favorites]);

// llamar a la api, esperar la respuesta y hacer un map de lo devuelto
const handleSearch = (query) => {
fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
    .then((res) => res.json())
    .then((data) => setSeries(data.map((item) => item.show)));
};

const selectSeries = (serie) => {
    setSelectedSeries(serie);
};

const closeDetail = () => {
    setSelectedSeries(null);
};

const toggleFavorite = (serie) => {
    const index = favorites.findIndex(fav => fav.id === serie.id);

    if (index !== -1) {
        // si la serie ya existe lo eliminamos
        setFavorites(favorites.filter((_, i) => i !== index));
    } else {
        // si no existe lo añadimos
        setFavorites([...favorites, serie]);
  }
};

  return (
      <div className="app-layout">
          <div className="left-column">
              <h1>Buscador TVMaze</h1>

              <SearchBar onSearch={handleSearch} onSelectSeries={selectSeries} />

              <SeriesList series={series} favorites={favorites}
                  onSelectSeries={selectSeries} onToggleFavorite={toggleFavorite}
              />
          </div>

          <div className="right-column">
              <FavoritesList favorites={favorites}
                  onSelectSeries={selectSeries} onToggleFavorite={toggleFavorite}
              />
          </div>

          {selectedSeries && (
          <SeriesDetail serie={selectedSeries}
            isFavorite={favorites.some((fav) => fav.id === selectedSeries.id)}
            onToggleFavorite={toggleFavorite}
            onClose={closeDetail}
          />
        )}
      </div>
    );
}