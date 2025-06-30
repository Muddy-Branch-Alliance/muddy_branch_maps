module.exports.default = (context) => {
  const baseStyle = {
    "id": "landuse_aerodrome",
    "type": "fill",
    "source": "protomaps",
    "source-layer": "landuse",
    "filter": ["in", "kind", "aerodrome"],
    "paint": {"fill-color": context.colors.airfield }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};