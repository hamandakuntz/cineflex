import { Link } from "react-router-dom";

export default function MoviesList() {
  return (
    <>
      <div className="selection">Selecione o filme</div>

      <ul className="movies">
        <Link to="/filme/id">
          <li className="movie">
            <img src="/assets/images/enolaholmes.png" alt="movie" />
          </li>
        </Link>
        <li className="movie">
          <img src="/assets/images/enolaholmes.png" alt="movie" />
        </li>
        <li className="movie">
          <img src="/assets/images/enolaholmes.png" alt="movie" />
        </li>
        <li className="movie">
          <img src="/assets/images/enolaholmes.png" alt="movie" />
        </li>
        <li className="movie">
          <img src="/assets/images/enolaholmes.png" alt="movie" />
        </li>
        <li className="movie">
          <img src="/assets/images/enolaholmes.png" alt="movie" />
        </li>
        <li className="movie">
          <img src="/assets/images/enolaholmes.png" alt="movie" />
        </li>
      </ul>
    </>
  );
}
