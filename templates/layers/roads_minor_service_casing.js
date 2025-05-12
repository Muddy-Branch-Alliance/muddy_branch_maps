module.exports.default = (context) => {
  const baseStyle = {
    "id": "roads_minor_service_casing",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "minzoom": 13,
    "filter": [
      "all",
      ["!has", "is_tunnel"],
      ["!has", "is_bridge"],
      ["==", "kind", "minor_road"],
      ["==", "kind_detail", "service"]
    ],
    "paint": {
      "line-color": "#e0e0e0",
      "line-gap-width": [
        "interpolate",
        ["exponential", 1.6],
        ["zoom"],
        13,
        0,
        18,
        8
      ],
      "line-width": [
        "interpolate",
        ["exponential", 1.6],
        ["zoom"],
        13,
        0,
        13.5,
        0.8
      ]
    }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};