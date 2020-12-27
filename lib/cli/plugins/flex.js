function flex(theme) {
  const flex = {};

  for (let flexName in theme.flex) {
    const value = theme.flex[flexName];

    flex[`flex-${flexName}`] = {
      flex: value,
    };
  }

  return flex;
}

module.exports = flex;
