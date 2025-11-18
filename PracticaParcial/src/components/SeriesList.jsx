export default function SeriesList({series, favorites, onSelectSeries, onToggleFavorite}) {
if (!series.length) return <p>No hay resultados.</p>;

  return (
      <div className="series-list">
          {series.map((serie) => (
              <div key={serie.id} className="serie-card">
                  <img
                  src={serie.image ? serie.image.medium : "https://via.placeholder.com/210x295"}
                  alt={serie.name}
                  onClick={() => onSelectSeries(serie)}
              />
              <h3>{serie.name}</h3>
              <button onClick={() => onToggleFavorite(serie)}>
                  {favorites.some((fav) => fav.id === serie.id)
                  ? "Quitar favorito"
                  : "Añadir favorito"}
              </button>
          </div>
          ))}
      </div>
      );
}
