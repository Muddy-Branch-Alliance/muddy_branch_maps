module.exports.default = (context) => {
  const baseStyle = {
    "id": "roads_other",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "filter": [
      "all",
      ["!has", "is_tunnel"],
      ["!has", "is_bridge"],
      ["in", "kind", "other", "path"],
      ["!=", "kind_detail", "pier"]
    ],
    "paint": {
      "line-color": "#ebebeb",
      "line-dasharray": [3, 1],
      "line-width": ["interpolate", ["exponential", 1.6], ["zoom"], 14, 0, 20, 8]
    }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};