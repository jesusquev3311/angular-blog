const sortProvider = (sortType) => (a, b) => {
  const valueA = a.title.toLowerCase();
  const valueB = b.title.toLowerCase();

  const direction = sortType === "asc" ? 1 : -1;

  let comparison = 0;
  if (valueA > valueB) {
    comparison = 1;
  } else if (valueA < valueB) {
    comparison = -1;
  }

  return comparison * direction;
};

export default sortProvider;
