export const Highlighted = ({text = '', highlight = '', className = ''}) => {
  if (!highlight.trim()) {
    return <span>{text}</span>;
  }
  const regex = new RegExp(`(${highlight})`, 'gi');

  const parts = text.split(regex);
  return (
    <span className={className}>
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
