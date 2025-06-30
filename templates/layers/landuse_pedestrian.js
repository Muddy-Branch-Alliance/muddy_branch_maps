module.exports.default = (context) => {
  const baseStyle = {
    "id": "landuse_pedestrian",
    "type": "fill",
    "source": "protomaps",
    "source-layer": "landuse",
    "filter": ["==", "kind", "pedestrian"],
    "paint": {"fill-color": context.colors.pavementLight}
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};