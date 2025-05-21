module.exports.default = (context) => {
  const baseStyle = {
    "id": "landuse_park",
    "type": "fill",
    "source": "protomaps",
    "source-layer": "landuse",
    "filter": [
      "in",
      "kind",
      "national_park",
      "park",
      "cemetery",
      "protected_area",
      "nature_reserve",
      "forest",
      "golf_course",
      "wood",
      "nature_reserve",
      "forest",
      "scrub",
      "grassland",
      "grass",
      "military",
      "naval_base",
      "airfield"
    ],
    "paint": {
      "fill-opacity": ["interpolate", ["linear"], ["zoom"], 10, 0.5, 16, 0.8],
      "fill-color": [
        "case",
        [
          "in",
          ["get", "kind"],
          ["literal", ["park", "cemetery", "golf_course"]]
        ],
        context.colors.green_light,
        [
          "in",
          ["get", "kind"],
          ["literal", ["wood", "forest","nature_reserve","protected_area","scrub"]]
        ],
        context.colors.green_bright,
        ["in", ["get", "kind"], ["literal", ["grass","national_park","grassland"]]],
        context.colors.green_lightest,
        [
          "in",
          ["get", "kind"],
          ["literal", ["military", "naval_base", "airfield"]]
        ],
        context.colors.chrome,
        context.colors.background
      ]
    }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};