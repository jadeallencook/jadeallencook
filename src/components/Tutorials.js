import TutorialsVideo from '../assets/tutorial.mp4';
import './Tutorials.scss';

function Tutorials() {
  return (
    <section className="tutorials">
      <h2 className="header">
        YouTube Tech Tutorials <br />
        With Thousands of Views
      </h2>
      <p className="eyebrow">Empowering Teams With Video</p>
      <video src={TutorialsVideo} autoPlay loop muted></video>
      <div className="comment">
        <p>
          <b>@chicomigrania822</b>
        </p>
        <p>
          I am amazed. You explained so much in the fastest, most understandable
          and simplest way i have ever seen! Subbed!
        </p>
      </div>
      <div className="comment">
        <p>
          <b>@chandanadeshmukh4368</b>
        </p>
        <p>
          One of the best videos I have watched! On to the point. Not a minute
          is wasted. Loved it.
        </p>
      </div>
      <div className="comment">
        <p>
          <b>@andrewbarr4843</b>
        </p>
        <p>
          Best course everyone should have before going into node and all modern
          JS languages
        </p>
      </div>
      <a
        href="https://www.youtube.com/playlist?list=PLkj0Wb8QyEEQs3-92fO8Jq5FmkiqPwRi1"
        target="_blank"
        rel="noreferrer"
      >
        Watch My Tutorials
      </a>
    </section>
  );
}

export default Tutorials;
