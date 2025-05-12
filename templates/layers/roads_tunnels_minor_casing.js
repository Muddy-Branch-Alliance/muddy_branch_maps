module.exports.default = (context) => {
  const baseStyle = {
    "id": "roads_tunnels_minor_casing",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "filter": ["all", ["has", "is_tunnel"], ["==", "kind", "minor_road"]],
    "paint": {
      "line-color": "#e0e0e0",
      "line-dasharray": [3, 2],
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