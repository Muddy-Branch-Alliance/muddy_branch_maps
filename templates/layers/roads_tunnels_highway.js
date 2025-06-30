module.exports.default = (context) => {
  const baseStyle = {
    "id": "roads_tunnels_highway",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "filter": [
      "all",
      ["has", "is_tunnel"],
      ["==", ["get", "kind"], "highway"],
      ["!", ["has", "is_link"]]
    ],
    "paint": {
      "line-color": context.colors.pavementMedium,
      "line-width": [
        "interpolate",
        ["exponential", 1.6],
        ["zoom"],
        3,
        0,
        6,
        1.1,
        12,
        1.6,
        15,
        5,
        18,
        15
      ]
    }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};