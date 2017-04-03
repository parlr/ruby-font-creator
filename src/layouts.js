export default {
  annotation: {
    top: options => ({
      x: options.width / 2,
      y: -4,
      fontSize: 28,
      anchor: "top center",
      attributes: { fill: "black", stroke: "black", id: "annotation" }
    })
  },
  base: {
    bottom: options => ({
      x: options.width / 2,
      y: options.height + 12,
      fontSize: 56,
      anchor: "bottom center",
      attributes: { fill: "black", stroke: "black", id: "glyph" }
    })
  }
};
