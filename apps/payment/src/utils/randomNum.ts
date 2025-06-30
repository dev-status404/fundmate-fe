export const randomPlaceholder = (length = 4) =>
  Array.from({ length }, () =>
    Math.floor(1000 + Math.random() * 9000).toString()
  );
