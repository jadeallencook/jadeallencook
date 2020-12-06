import './Categories.scss';

function Categories() {
  return (
    <section className="Categories">
      <h2>YouTube Playlists</h2>
      <br />
      <a href="https://www.youtube.com/playlist?list=PLkj0Wb8QyEEQs3-92fO8Jq5FmkiqPwRi1" target="_blank" rel="noreferrer">
        Programming Tutorials
        <i className="fa fa-chevron-right" aria-hidden="true"></i>
      </a>
      <a href="https://www.youtube.com/playlist?list=PLkj0Wb8QyEERYX8l1VQJuKE8WLlRYjRlH" target="_blank" rel="noreferrer">
        Business Commercials
        <i className="fa fa-chevron-right" aria-hidden="true"></i>
      </a>
      <a href="https://www.youtube.com/playlist?list=PLkj0Wb8QyEERqtaTPczQaIXW1taQyBkVv" target="_blank" rel="noreferrer">
        Freelancing Advice
        <i className="fa fa-chevron-right" aria-hidden="true"></i>
      </a>
      <a href="https://www.youtube.com/playlist?list=PLkj0Wb8QyEESsIFYHWBaS7BjbsLgHLUWd" target="_blank" rel="noreferrer">
        Travel & Adventure<i className="fa fa-chevron-right" aria-hidden="true"></i>
      </a>
    </section>
  );
}

export default Categories;
