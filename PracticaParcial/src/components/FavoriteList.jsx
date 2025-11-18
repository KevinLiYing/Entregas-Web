export default function FavoritesList({favorites, onSelectSeries, onToggleFavorite}) {
  return (
    <div>
      <h2>Favoritos</h2>
      <div className="favorites-list">
        {/*Mapeo de las series*/}
        {favorites.map((serie) => (
          <div key={serie.id} className="favorite-card">
            <img
              src={serie.image ? serie.image.medium : "https://via.placeholder.com/210x295"}
              alt={serie.name}
              onClick={() => onSelectSeries(serie)}
            />
            <h3>{serie.name}</h3>
            {/*Llamamos a la funcion ToggleFavorite para quitar la serie de favoritos*/}
            <button onClick={() => onToggleFavorite(serie)}>Quitar</button>
          </div>
        ))}
      </div>
    </div>
  );
}
