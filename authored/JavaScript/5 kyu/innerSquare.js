function innerSquare(rect, center, side) {

  let cols = rect[0].length,
      rows = rect.length,
      half = side / 2 | 0,
      res = [],
      cCoords = {
        r: center / cols | 0,
        c: center % cols
      },
      ranges = {
        top: Math.max(0, cCoords.r - half),
        left: Math.max(0, cCoords.c - half),
        right: cCoords.c + Math.min(half, cols - 1 - cCoords.c),
        bottom: cCoords.r + Math.min(half, rows - 1 - cCoords.r)
      };

  for (let t = ranges.top, b = ranges.bottom; t <= b ; t++) {
    res.push(rect[t].slice(ranges.left, ranges.right + 1));
  };

  return res;

}
