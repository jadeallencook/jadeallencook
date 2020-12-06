import { useState } from 'react';
import './Gallary.scss';
import Cloud from '../assets/gallary/cloud.jpg';
import Apartment from '../assets/gallary/apartment.jpg';
import Chicago from '../assets/gallary/chicago.jpg';
import Encore from '../assets/gallary/encore.jpg';
import Google from '../assets/gallary/google.jpg';
import Board from '../assets/gallary/board.jpg';
import Camera from '../assets/gallary/camera.jpg';
import Hotpot from '../assets/gallary/hotpot.jpg';
import Ksl from '../assets/gallary/ksl.jpg';
import Paper from '../assets/gallary/paper.jpg';
import Pool from '../assets/gallary/pool.jpg';
import Ppd from '../assets/gallary/ppd.jpg';
import Rap from '../assets/gallary/rap.jpg';
import SaltLake from '../assets/gallary/saltlake.jpg';
import Video from '../assets/gallary/video.jpg';

function Gallary() {
  const [source, setSource] = useState(Cloud);

  function select(event) {
    const { tagName } = event.target;
    if (tagName === 'IMG') {
      const { src } = event.target;
      setSource(src);
    }
  }

  return (
    <section className="Gallary">
      <img
        src={source}
        className={source.indexOf(source) !== -1 ? 'selected' : null}
        alt=""
      />
      <div onClick={select}>
        <img
          src={Cloud}
          className={source.indexOf(Cloud) !== -1 ? 'selected' : null}
          alt=""
        />
        <img
          src={Apartment}
          className={source.indexOf(Apartment) !== -1 ? 'selected' : null}
          alt=""
        />
        <img
          src={Chicago}
          className={source.indexOf(Chicago) !== -1 ? 'selected' : null}
          alt=""
        />
        <img
          src={Encore}
          className={source.indexOf(Encore) !== -1 ? 'selected' : null}
          alt=""
        />
        <img
          src={Google}
          className={source.indexOf(Google) !== -1 ? 'selected' : null}
          alt=""
        />
        <img
          src={Board}
          className={source.indexOf(Board) !== -1 ? 'selected' : null}
          alt=""
        />
        <img
          src={Camera}
          className={source.indexOf(Camera) !== -1 ? 'selected' : null}
          alt=""
        />
        <img
          src={Hotpot}
          className={source.indexOf(Hotpot) !== -1 ? 'selected' : null}
          alt=""
        />
        <img
          src={Ksl}
          className={source.indexOf(Ksl) !== -1 ? 'selected' : null}
          alt=""
        />
        <img
          src={Paper}
          className={source.indexOf(Paper) !== -1 ? 'selected' : null}
          alt=""
        />
        <img
          src={Pool}
          className={source.indexOf(Pool) !== -1 ? 'selected' : null}
          alt=""
        />
        <img
          src={Ppd}
          className={source.indexOf(Ppd) !== -1 ? 'selected' : null}
          alt=""
        />
        <img
          src={Rap}
          className={source.indexOf(Rap) !== -1 ? 'selected' : null}
          alt=""
        />
        <img
          src={SaltLake}
          className={source.indexOf(SaltLake) !== -1 ? 'selected' : null}
          alt=""
        />
        <img
          src={Video}
          className={source.indexOf(Video) !== -1 ? 'selected' : null}
          alt=""
        />
      </div>
    </section>
  );
}

export default Gallary;
