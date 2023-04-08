const chunkArr = (arr: unknown[], chunkSize = 6): unknown[] => {
  const result: unknown[] = [];

  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }

  return result;
};

export { chunkArr };
