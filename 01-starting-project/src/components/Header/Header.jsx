import reactImg from '../../assets/config.png'
const reactDest=["Fundamentals", "Crucial", "Core"]
import './Header.css'
function genRandom(max){
  return Math.floor(Math.random()*(max+1));
}
export default function Header(){  
  const description=reactDest[genRandom(2)];
  return (
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description } React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  );
}