module.exports.default = (context) => {
  const baseStyle = {
    "id": "muddy_branch_access",
    "type": "symbol",
    "source": "muddy_branch_relation",
    "filter": ["==", ["get", "highway"], "trailhead"],
    "layout": {
      "icon-image": "trailhead",
      "icon-size": ["interpolate", ["exponential", 1], ["zoom"], 13, 0.8, 16, 1, 18, 1.2],
      "icon-allow-overlap": true,
      "text-field": ["step", ["zoom"], "", 15, "Trailhead"],
      "text-font": ["Noto Sans Regular"],
      "text-size": ["interpolate", ["exponential", 0.7], ["zoom"], 13, 11, 18, 12],
      "text-justify": "auto",
      "text-variable-anchor": ["left", "right", "bottom"],
      "text-variable-anchor-offset": ["interpolate", ["exponential", 1.7], ["zoom"],
        12, ["literal",["left", [0.6, 0], "right", [-0.6, 0], "bottom", [0, 0.6]]],
        20, ["literal",["left", [1.2, 0], "right", [-1.2, 0], "bottom", [0, 1.2]]]
      ],
      "text-padding": 2
    }, "paint": {
      "text-color": context.colors.trailLabel,
      "text-halo-color": context.colors.other_vegetation,
      "text-halo-width": 1,
    }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};