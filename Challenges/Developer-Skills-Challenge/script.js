var printForest = (arr) => {
  let c = "";
  for (let i = 0; i < arr.length; i++) {
    c += `...${arr[i]}C in ${i + 1} days`;
  }
  return c;
};

console.log(printForest([17, 21, 23]));
