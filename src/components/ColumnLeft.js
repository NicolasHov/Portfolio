export default function ColumnLeft() {
    const Hover = ({ onHover, children }) => (
        <div className="hover">
            <div className="hover__no-hover">{children}</div>
            <div className="hover__hover">{onHover}</div>
        </div>
    )

    return (
        <div className="column">
            <div className="box">
                <Hover onHover={
                    <div>
                        <p>Localisation</p>
                        <p><strong>Paris</strong></p>
                        <p>J&#x27;aimerais faire du télétravail régulier (quelque
                        fois par semaine)</p>
                        <p><strong>Contrat</strong>Cdd, Freelance ou CDI</p>
                        <h3>J&#x27;aimerais en particulier</h3>
                        <p>Du challenge</p>
                        <p>Une bonne ambiance</p>
                        <p>Autre</p>
                        <p>Des responsabilités</p>
                        <p>Le salaire</p>
                        <p>Des formations</p>
                    </div>}>
                    <div>
                        <h2>Je code avec React</h2>
                        {/* <figure className="image">
                            <img src="" alt="" />
                        </figure> */}
                    </div>
                </Hover>
            </div>
            <div className="box noPadding">
                <p><strong>Hobbies</strong></p>
                <figure className="image">
                    <img class="borderRadiusBottom" src="https://media3.giphy.com/media/l41JU9pUyosHzWyuQ/giphy.gif?cid=f7fb5bbafu3d1x4yqehu2bzmzzfkea78qwg9f814xcx7b3px&amp;rid=giphy.gif" alt="gif Morty" />
                </figure>
            </div>
            <div className="box">
                <h2>Intéressé par :</h2>
                <p>NodeJs, MongoDB, Rust, Nix</p>
            </div>
        </div>
    )
}