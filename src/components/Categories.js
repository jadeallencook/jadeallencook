import './Categories.scss';

function Categories(props) {
  const { playlists } = props;
  return (
    <section className="Categories">
      <h2>{playlists?.title[0].text}</h2>
      <br />
      {playlists?.playlists?.map((playlist, index) => {
        const { text } = playlist?.playlist[0];
        const { url } = playlist?.playlist[0]?.spans[0]?.data;
        return (
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            key={`playlist-link-${index}`}
          >
            {text}
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </a>
        );
      })}
    </section>
  );
}

export default Categories;
