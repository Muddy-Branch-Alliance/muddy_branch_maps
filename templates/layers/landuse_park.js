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
    "layout": {"visibility": "visible"},
    "paint": {
      "fill-opacity": ["interpolate", ["linear"], ["zoom"], 6, 0, 11, 1],
      "fill-color": [
        "case",
        [
          "in",
          ["get", "kind"],
          ["literal", ["national_park", "park", "cemetery", "golf_course"]]
        ],
        "#b2df8a",
        [
          "in",
          ["get", "kind"],
          ["literal", ["wood", "nature_reserve", "forest", "protected_area"]]
        ],
        "#33a02c",
        ["in", ["get", "kind"], ["literal", ["scrub", "grassland", "grass"]]],
        "#b2df8a",
        ["in", ["get", "kind"], ["literal", ["glacier"]]],
        "#e7e7e7",
        ["in", ["get", "kind"], ["literal", ["sand"]]],
        "#e2e0d7",
        [
          "in",
          ["get", "kind"],
          ["literal", ["military", "naval_base", "airfield"]]
        ],
        "#c6dcdc",
        "#e2dfda"
      ]
    }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};