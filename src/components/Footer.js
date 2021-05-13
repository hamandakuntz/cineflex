export default function Footer({movieImg, movieTitle}) {
    return (
        <div className="footer">
            <div className="footer-movie">
                <img src={movieImg} alt="movie-img"></img>
            </div>
            <div className="title">{movieTitle}</div>
        </div>
    );
}