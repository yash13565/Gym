import { selector } from "recoil";
import { loginAtom } from "../atom/Atom";

export const selectorValue = selector({
  key: "selectorValue",
  get: ({ get }) => {
    const data = get(loginAtom);
    return parseInt(data);
  },
});

