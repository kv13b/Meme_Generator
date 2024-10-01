import img from "../../public/images/MemeHead.png";

export default function Header() {
  return (
    <header className="header">
      <img src={img} className="header--image"></img>
      <h1 className="header--titile">Meme Generator</h1>
    </header>
  );
}
