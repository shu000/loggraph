const Util = {
  range: (n: number) => (n < 0 ? [] : Array.from(Array(n), (_, i) => i)),
};

export default Util;
