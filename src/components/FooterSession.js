export default function FooterSession({ movieImg, movieDay, movieTitle, movieSession }) { 
  return (
    <div className="footer">
      <div className="footer-movie">
        <img src={movieImg} alt="movie-img"></img>
      </div>
      <div className="info-session">
        <div className="title-session">{movieTitle}</div>
        <div className="title-hour">{movieDay} - {movieSession}</div>
      </div>
    </div>
  );
}
