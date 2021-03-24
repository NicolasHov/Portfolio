import avatar from '../avatar.png';

export default function Header() {
    return (
        <header>
            <div id="avatar">
                <img src={avatar} alt="avatar Nicolas" />
            </div>
            <div>
                <h1 className="page-title">Nicolas Hovart</h1>
                <h3>Développeur React Web&amp;Mobile</h3>
            </div>
        </header>
    )
}