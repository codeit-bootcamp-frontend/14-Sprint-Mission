const debounce = <T extends (...args: any[]) => any>(
  callback: T,
  delay: number
) => {
  let timer: ReturnType<typeof setTimeout> | undefined;

  return (...args: Parameters<T>) => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
};

export default debounce;
