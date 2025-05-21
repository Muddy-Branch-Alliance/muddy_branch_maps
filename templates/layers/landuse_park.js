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
      "fill-opacity": ["interpolate", ["linear"], ["zoom"], 10, 0.1, 16, 0.5],
      "fill-color": [
        "case",
        [
          "in",
          ["get", "kind"],
          ["literal", ["park", "cemetery", "golf_course"]]
        ],
        context.colors.irrigated,
        [
          "in",
          ["get", "kind"],
          ["literal", ["wood", "forest","nature_reserve","protected_area","scrub"]]
        ],
        context.colors.forest,
        ["in", ["get", "kind"], ["literal", ["grass","national_park","grassland"]]],
        context.colors.other_vegetation,
        [
          "in",
          ["get", "kind"],
          ["literal", ["military", "naval_base", "airfield"]]
        ],
        context.colors.chrome,
        context.colors.ground_dark
      ]
    }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};