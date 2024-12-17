export const Highlighted = ({text = '', highlight = ''}) => {
  if (!highlight.trim()) {
    return <span>{text}</span>;
  }
  const regex = new RegExp(`(${highlight})`, 'gi');

  const parts = text.split(regex);
  return (
    <span>
      {parts
        .filter(part => part)
        .map((part, i) => {
          if (regex.test(part)) {
            return <mark key={i}>{part}</mark>;
          } else {
            return <span key={i}>{part}</span>;
          }
        })}
    </span>
  );
};
