module.exports.default = (context) => {
  const baseStyle = {
    "id": "muddy_branch_access",
    "type": "symbol",
    "source": "muddy_branch_relation",
    "filter": ["==", ["get", "highway"], "trailhead"],
    "layout": {
      "icon-image": "trailhead",
      "icon-size": ["interpolate", ["linear"], ["zoom"], 13, 0.8, 16, 1.2, 18, 2],
      "icon-allow-overlap": true,
      "text-field": "Trailhead",
      "text-font": ["Noto Sans Regular"],
      "text-size": ["interpolate", ["exponential", 0.7], ["zoom"], 13, 12, 18, 14],
      "text-justify": "auto",
      "text-variable-anchor": ["left", "right", "bottom", "top"],
      "text-variable-anchor-offset": ["interpolate", ["linear"], ["zoom"],
        13, ["literal",["left", [0.5, 0], "right", [-0.5, 0], "bottom", [0, 0.5], "top", [0, 0.5]]],
        16, ["literal",["left", [1, 0], "right", [-1, 0], "bottom", [0, 1], "top", [0, 1]]],
        18, ["literal",["left", [1.2, 0], "right", [-1.2, 0], "bottom", [0, 1.2], "top", [0, 1.2]]]
      ],
      "text-padding": 2
    }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};