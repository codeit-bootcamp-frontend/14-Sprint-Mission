export const onNameChange = ({ e, setProductName }) => {
  setProductName(e.target.value);
};

export const onProductIntroChange = ({ e, setProductIntro }) => {
  setProductIntro(e.target.value);
};

export const onPriceChange = ({ e, setProductPrice }) => {
  setProductPrice(Number(e.target.value));
};

export const onTagChange = ({ e, setTag }) => {
  if (e.key === "Enter" && e.target.value.trim() !== "") {
    setTag((prev) => [...prev, e.target.value]);
    e.target.value = "";
    e.preventDefault();
  }
};
