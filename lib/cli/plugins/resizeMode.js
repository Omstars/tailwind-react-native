function resizeMode(theme) {
  const resizeMode = {};

  for (let resizeModeName in theme.resizeMode) {
    const value = theme.resizeMode[resizeModeName];

    resizeMode[`resize-${resizeModeName}`] = {
      resizeMode: value,
    };
  }

  return resizeMode;
}

module.exports = resizeMode;
