import './Button.scss';

function Button({ link, text, isSecondary }) {
  const handle = () => window.open(link, '_blank');
  return (
    <button onClick={handle} className={isSecondary ? 'secondary' : ''}>
      {text}
    </button>
  );
}

export default Button;
