export const selectPublicStyles = reduxState =>
  reduxState.recommendation.publicStyles;

export const selectUserStyles = reduxState =>
  reduxState.recommendation.userStyles;

export const selectPublicStylesWithRating = reduxState =>
  reduxState.recommendation.publicStylesRating;

export const selectStyleLoading = reduxState =>
  reduxState.recommendation.loading;

export const selectTypePublicStyles = type => reduxState => {
  const clonedPublicStyles = [...reduxState.recommendation.publicStyles];
  if (type === 'all') {
    return clonedPublicStyles;
  }
  const filteredPublicStyles = clonedPublicStyles.filter(style => {
    return style.clothingType === type;
  });
  return filteredPublicStyles;
};

export const selectUserStyleWithId = id => reduxState => {
  const clonedUserStyles = [...reduxState.recommendation.userStyles];
  const specificUserStyle = clonedUserStyles.find(style => {
    return id === style.id;
  });
  return specificUserStyle;
};

export const selectPublicStyleWithId = id => reduxState => {
  const clonedPublicStyles = [...reduxState.recommendation.publicStylesRating];
  const specificPublicStyle = clonedPublicStyles.find(style => {
    return id === style.id;
  });
  return specificPublicStyle;
};
