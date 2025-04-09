const color = (variant) => (props) => {
  const colorsStyle = props.theme.colors[variant];

  if (!colorsStyle) {
    console.warn(`"${variant}"가 theme에 존재하지 않습니다`);
    return "";
  }

  return colorsStyle;
};

export default color;
