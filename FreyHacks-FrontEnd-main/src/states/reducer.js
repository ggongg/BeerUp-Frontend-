export default function reducer(prevState, action) {
  let cachedState;
  switch (action.type) {
    case "LOG_IN":
      cachedState = {
        ...prevState,
        userData: action.userData,
        isLoggedIn: true,
      };
      break;
    case "LOG_OUT":
      cachedState = {
        ...prevState,
        userData: {},
        isLoggedIn: false,
      };
      break;
    case "SELECT_INSTRUMENT":
      cachedState = {
        ...prevState,
        instrument: action.instrument,
      };
      break;
    case "RECORDED_VIDEO":
      cachedState = {
        ...prevState,
        video_url: action.video_url,
      };
      break;
    default:
      cachedState = prevState;
  }

  // cached the data to prevent lost data after refreshing
  localStorage.setItem("state", JSON.stringify(cachedState));
  return cachedState;
}
