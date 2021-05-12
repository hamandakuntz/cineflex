export default function FooterSession(props) {

    const {movieImg, movieTitle, movieSession} = props;
    console.log(movieSession)

    return (
        <div className="footer">
            <div className="footer-movie">
                <img src={movieImg}></img>
            </div>
            <div className="info-session">
                <div className="title-session">{movieTitle}</div>
                <div className="title-hour">Alterar - 15:00</div>
            </div>
        </div>
    );
}