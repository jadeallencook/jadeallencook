import './Header.scss';
import Button from '../atoms/Button';

function Header(props) {
  const { header } = props;
  return (
    <header
      style={{
        backgroundImage: `url(${header?.background?.url})`,
      }}
    >
      <div>
        <h1>
          {header?.title[0].text.split(' ').map((string, index) => (
            <span key={`header-word-${index}`}>{string}</span>
          ))}
        </h1>
        <br />
        <span>{header?.subtext[0].text}</span>
        <br />
        {header?.buttons?.map(({ button }, index) => {
          const { text, spans } = button[0];
          const link = spans[0].data.url;
          return (
            <Button
              key={`cta-${index}`}
              link={link}
              text={text}
              isSecondary={index}
            />
          );
        })}
      </div>
    </header>
  );
}

export default Header;
