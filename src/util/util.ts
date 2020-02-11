const Util = {
  range: (n: number) => (n < 0 ? [] : Array.from(Array(n), (_, i) => i)),
  seeableColor: (backgroundColor: string): '#ffffff' | '#000000' => {
    // Convert #rgb or #rrggbb to [r, g, b].
    const pickRGB = (colorCode: string): [number, number, number] => {
      if (colorCode.length === 4)
        return [
          parseInt(colorCode.substring(1, 2) + colorCode.substring(1, 2), 16),
          parseInt(colorCode.substring(2, 3) + colorCode.substring(2, 3), 16),
          parseInt(colorCode.substring(3, 4) + colorCode.substring(3, 4), 16),
        ];
      if (colorCode.length === 7)
        return [
          parseInt(colorCode.substring(1, 3), 16),
          parseInt(colorCode.substring(3, 5), 16),
          parseInt(colorCode.substring(5, 7), 16),
        ];

      return [255, 255, 255];
    };

    const white = '#ffffff';
    const black = '#000000';
    const threthold = 128;

    if (backgroundColor.length !== 4 && backgroundColor.length !== 7) {
      return black;
    }

    // '#123' or '#112233' => [17, 34, 51]
    const [r, g, b] = pickRGB(backgroundColor);

    // calc YUV
    // https://ja.wikipedia.org/wiki/YUV
    const yuv = 0.299 * r + 0.587 * g + 0.114 * b;

    return yuv >= threthold ? black : white;
  },
};

export default Util;
