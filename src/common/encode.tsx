export const encode = (url: string): string => {
  return encodeURI(url)
    .replace('#', '%23')
    .replace('(', '%28')
    .replace(')', '%29')
    .replace('[', '%5B')
    .replace(']', '%5D');
};
