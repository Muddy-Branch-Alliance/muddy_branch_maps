module.exports.default = (context) => {
  const baseStyle = {
    "id": "water_label_lakes",
    "type": "symbol",
    "source": "protomaps",
    "source-layer": "water",
    "filter": ["in", "kind", "lake", "water"],
    "layout": {
      "text-font": ["Noto Sans Italic"],
      "text-field": [
        "coalesce",
        ["get", "name:en"],
        ["get", "name"]
      ],
      "text-size": ["interpolate", ["linear"], ["zoom"], 3, 10, 6, 12, 15, 12, 17, 16],
      "text-letter-spacing": 0.1,
      "text-max-width": 9
    },
    "paint": {
      "text-color": context.colors.water_dark,
      "text-halo-color": context.colors.water_light,
      "text-halo-width": 1
    }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};