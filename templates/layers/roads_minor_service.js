module.exports.default = (context) => {
  const baseStyle = {
    "id": "roads_minor_service",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "filter": [
      "all",
      ["!has", "is_tunnel"],
      ["!has", "is_bridge"],
      ["==", "kind", "minor_road"],
      ["==", "kind_detail", "service"]
    ],
    "paint": {
      "line-color": context.colors.pavementLight,
      "line-width": ["interpolate", ["exponential", 1.6], ["zoom"], 13, 0, 18, 8]
    }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};