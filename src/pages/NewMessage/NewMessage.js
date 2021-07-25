import { Link } from 'react-router-dom'
import Lottie from 'react-lottie';
import animationData from '../../lotties/back-arrow.json';

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
            height={300}
            width={300}
          />
        </div>
          
          <p>
            NEW MESSAGE FORM WILL BE HERE, SOON!
          </p>

          <Link to="/profile"> Please, Go back to your profile!</Link>
        </header>
  );
}