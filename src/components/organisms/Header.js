import './Header.scss';

function Header(props) {
  const { header } = props;
  return (
    <header
      style={{
        backgroundImage: `url(${header?.background?.url})`,
      }}
    >
      <div>
        <h1>{header?.title[0].text}</h1>
        <br />
        <span>{header?.subtext[0].text}</span>
        <br />
        {header?.buttons?.map(({ button }, index) => {
          const { text, spans } = button[0];
          const link = spans[0].data.url;
          return (
            <a
              key={`header-button-${index}`}
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              {text}
            </a>
          );
        })}
      </div>
    </header>
  );
}

export default Header;
