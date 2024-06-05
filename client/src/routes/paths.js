// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_PATH = "/";

export const PATH_DEFAULT = {
  root: ROOTS_PATH,
  general: {
    front: path(ROOTS_PATH, "welcome"),
    home: path(ROOTS_PATH, "home"),
  },
};
