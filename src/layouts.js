export default {
  annotation: {
    bottom: options => ({
      x: options.width / 2,
      y: options.height + 12,
      fontSize: 28,
      anchor: "bottom center",
      attributes: { fill: "black", stroke: "black", id: "annotation" }
    }),
    left: options => ({
      x: 1,
      y: options.height * 1.5 / 2,
      fontSize: 24,
      anchor: "left center",
      attributes: {
        fill: "black",
        stroke: "black",
        id: "glyph",
        transform: `rotate(-90, 24, ${options.height / 2}) translate(0, ${-(24 + 1)})`
      }
    }),
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
    }),
    right: options => ({
      x: options.width / 2 + 10,
      y: options.height,
      fontSize: 64,
      anchor: "bottom center",
      attributes: { fill: "black", stroke: "black", id: "glyph" }
    }),
    top: options => ({
      x: options.width / 2,
      y: -4,
      fontSize: 56,
      anchor: "top center",
      attributes: { fill: "black", stroke: "black", id: "glyph" }
    })
  }
};
