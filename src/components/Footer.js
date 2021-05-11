export default function Footer(props) {
    return (
        <div className="footer">
            <div className="footer-movie">
                <img src={props.movieImg}></img>
            </div>
            <div className="title">{props.movieName}</div>
        </div>
    );
}