module.exports.default = (context) => {
  const baseStyle = {
    "id": "roads_tunnels_minor",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "filter": ["all", ["has", "is_tunnel"], ["==", "kind", "minor_road"]],
    "paint": {
      "line-color": "#d5d5d5",
      "line-width": [
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
      ]
    }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};