export const onNameChange = ({ e, setState }) => {
  setState(e.target.value);
};

export const onProductIntroChange = ({ e, setState }) => {
  setState(e.target.value);
};

export const onPriceChange = ({ e, setState }) => {
  const onlyNumber = e.target.value.replace(/[^0-9]/g, "");
  if (onlyNumber === "") {
    e.target.value = "";
    setState(0);
    return;
  }
  setState(onlyNumber === "" ? 0 : Number(onlyNumber));
};

export const onTagChange = ({ e, setState }) => {
  const value = e.target.value;
  if (e.key === "Enter" && value.trim() !== "") {
    setState((prev) => [...prev, value]);
    e.target.value = "";
    e.preventDefault();
  }
};
