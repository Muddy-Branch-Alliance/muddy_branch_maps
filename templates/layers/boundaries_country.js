module.exports.default = (context) => {
  const baseStyle = {
    "id": "boundaries_country",
    "type": "line",
    "source": "protomaps",
    "source-layer": "boundaries",
    "filter": ["<=", "kind_detail", 2],
    "paint": {
      "line-color": "#adadad",
      "line-width": 0.7,
      "line-dasharray": [
        "step",
        ["zoom"],
        ["literal", [2]],
        4,
        ["literal", [2, 1]]
      ]
    }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};