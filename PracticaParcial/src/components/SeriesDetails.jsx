export default function SeriesDetail({ serie, isFavorite, onToggleFavorite, onClose }) {
    return (
        <div className="modal">
            <div className="modal-content">

            <button className="close" onClick={onClose}>✖</button>

            <h2>{serie.name}</h2>

            <img
            src={serie.image ? serie.image.original : "https://via.placeholder.com/300x400"}
            alt={serie.name}
            />

            {serie.summary}

            {/*Llamamos a ToggleFavorite para añadirlo a favoritos*/}
            <button onClick={() => onToggleFavorite(serie)}>
            {isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
            </button>
            </div>
        </div>
  );
}
