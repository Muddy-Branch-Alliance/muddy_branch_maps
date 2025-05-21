module.exports.default = (context) => {
  const baseStyle = {
    "id": "water_stream",
    "type": "line",
    "source": "protomaps",
    "source-layer": "water",
    "filter": ["in", "kind", "stream"],
    "paint": {"line-color": context.colors.water_light }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};