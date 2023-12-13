export const getHeadTitle = (title?: string) => {
  if (!title) {
    return "MEC Energia";
  }

  return title.trim() + " — MEC Energia";
};
