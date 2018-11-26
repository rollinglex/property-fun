function userLikesLocalStorage() {
  const updateLocalStorage = likes => {
    localStorage.setItem("likedProperties", JSON.stringify([...likes]));
  };
  const getLocalStorage = () => {
    return JSON.parse(localStorage.getItem("likedProperties"));
  };

  return {
    updateLocalStorage,
    getLocalStorage
  };
}

export default userLikesLocalStorage;
