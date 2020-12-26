function minHeight(theme) {
  const heights = {};

  for (let heightName in theme.height) {
    const value = theme.height[heightName];

    heights[`min-h-${heightName}`] = {
      minHeight: value,
    };
  }

  return heights;
}

module.exports = minHeight;
