const handleClick = (animeName, setShouldUpdate, setDisplayContent) => {
  window.handleClick = handleClick;

  window.state.isTweenAnimating = true;
  const sets = window.state.sets;

  const isSetAnArray = Array.isArray(sets[animeName]);

  if (isSetAnArray) {
    window.state.cameraPos = sets[animeName].map((set) => set.cameraPos);
    window.state.target = sets[animeName].map((set) => set.target);
  } else {
    if (window.state.cameraPos.isVector3) {
      window.state.cameraPos.set(...sets[animeName].cameraPos);
      window.state.target.set(...sets[animeName].target);
    } else {
      if (Array.isArray(sets[animeName])) {
        window.state.cameraPos = sets[animeName].map((set) => set.cameraPos);
        window.state.target = sets[animeName].map((set) => set.target);
      } else {
        window.state.cameraPos = sets[animeName].cameraPos;
        window.state.target = sets[animeName].target;
      }
    }
  }

  window.state.animeName = animeName;
  window.state.cameraFov = sets[animeName].cameraFov;

  window.state.shouldUpdate = true;
  setShouldUpdate(true);
  setDisplayContent((prevState) => {
    return { ...prevState, shouldDisplay: animeName !== "FREE_ROOM", type: animeName };
  });
};

export { handleClick };
