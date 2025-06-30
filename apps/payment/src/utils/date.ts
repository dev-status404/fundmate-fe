export const monthList = () => {
  return [...Array(12)].map((_, index) => ({
    value: index + 1,
    label: String(index + 1).padStart(2, '0'),
  }));
};

export const yearList = (count = 10) => {
  const currentYear = new Date().getFullYear();
  return [...Array(count)].map((_, index) => currentYear + index);
};
