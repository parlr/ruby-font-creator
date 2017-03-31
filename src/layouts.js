export default {
  annotation: {
    top: options => ({
      x: options.width / 2,
      y: -1,
      fontSize: 16,
      anchor: "top center",
      attributes: { fill: "black", stroke: "black", id: "annotation" }
    })
  },
  base: {
    bottom: options => ({
      x: options.width / 2,
      y: options.height + 2,
      fontSize: 72,
      anchor: "bottom center",
      attributes: { fill: "black", stroke: "black", id: "glyph" }
    })
  }
};
