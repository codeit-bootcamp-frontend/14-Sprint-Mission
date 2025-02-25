export const makeParagraph = (textArray) => {
  return textArray.reduce((acc, text, index) => {
    if (index !== 0) acc.push(<br key={index} />);
    acc.push(text);
    return acc;
  }, []);
};
