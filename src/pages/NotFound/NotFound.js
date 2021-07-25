import { Link } from 'react-router-dom'
import Lottie from 'react-lottie';
import animationData from '../../lotties/lottie-404.json';

export default function NewMessage() {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };


  return (
    <header className="App-header">
      <div>
        <Lottie 
        options={defaultOptions}
          height={400}
          width={400}
        />
      </div>

      <Link to="/profile"> Please, Go back to your profile!</Link>
    </header>

  );
}