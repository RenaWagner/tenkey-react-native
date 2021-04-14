export const selectUser = reduxState => reduxState.user.userInfo;
export const selectUserToken = reduxState => reduxState.user.token;

export const selectUserAllStyles = reduxState => reduxState.user.styles;

export const selectUserAllWithId = id => reduxState => {
  const clonedUserStyles = [...reduxState.user.styles];
  const specificUserStyle = clonedUserStyles.find(style => {
    return id === style.id;
  });
  return specificUserStyle;
};
