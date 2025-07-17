import Button from "./components/button";
import Card from "./components/card";
import swPosterImg from "./assets/sw-poster.jpg";
import esbPosterImg from "./assets/esb-poster.jpg";
import rotjPosterImg from "./assets/rotj-poster.jpg";

export default function App() {
  return (
    <>
      <Button text="Ir ao Blog"/>
      <Card title="Pôster: Star Wars (1977)" posterImg={swPosterImg} />
      <Card title="Pôster: Empire Stikes Back (1980)" posterImg={esbPosterImg} />
      <Card title="Pôster: Return of the Jedi (1983)" posterImg={rotjPosterImg} />
      
    </>
  )
}


