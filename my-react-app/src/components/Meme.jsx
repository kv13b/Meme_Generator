//import MemeData from "../MemeData";
import { useEffect, useState } from "react";
export default function Meme() {
  const [meme, setmeme] = useState({
    topText: "",
    bottomText: "",
    randImg: "http://i.imgflip.com/1bij.jpg",
  });
  console.log(meme);
  const [allmeme, setallmeme] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setallmeme(data.data.memes);
    }
    fetchData();
  }, []);

  function getNewImage() {
    //const memearrays = allmeme.data.memes;
    const randomnum = Math.floor(Math.random() * allmeme.length);
    const url = allmeme[randomnum].url;
    setmeme((prev) => ({
      ...prev,
      randImg: url,
    }));
  }
  console.log(allmeme);

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setmeme((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  return (
    <main>
      <div className="form">
        <label htmlFor="top-text">Top Text</label>
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
          id="top-text"
          name="topText"
          onChange={handleChange}
          value={meme.topText}
        />
        <label htmlFor="bottom-text">Bottom Text</label>
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
          id="bottom-text"
          name="bottomText"
          onChange={handleChange}
          value={meme.bottomText}
        />
        <button className="form--button" onClick={getNewImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randImg} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
