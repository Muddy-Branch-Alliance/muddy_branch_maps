module.exports.default = (context) => {
  const baseStyle = {
    "id": "roads_minor_casing",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "filter": [
      "all",
      ["!has", "is_tunnel"],
      ["!has", "is_bridge"],
      ["==", "kind", "minor_road"],
      ["!=", "kind_detail", "service"]
    ],
    "layout": {"visibility": "visible"},
    "paint": {
      "line-color": "#e0e0e0",
      "line-gap-width": [
        "interpolate",
        ["exponential", 1.6],
        ["zoom"],
        11,
        0,
        12.5,
        0.5,
        15,
        2,
        18,
        11
      ],
      "line-width": [
        "interpolate",
        ["exponential", 1.6],
        ["zoom"],
        12,
        0,
        12.5,
        1
      ]
    }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};