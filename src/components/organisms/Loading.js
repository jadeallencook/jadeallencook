import './Loading.scss';
import Image from '../../assets/loading.gif';

function Loading() {
  return (
    <div className="Loading">
      <img src={Image} alt="loading" />
    </div>
  );
}

export default Loading;
