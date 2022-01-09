import { atom } from "recoil";

export const isLoggedInAtom = atom({
  key: "loggedIn",
  default: false,
});
export const isDarkAtom = atom({
  key: "isDark",
  default: true,
});
export const isLikedAtom = atom({
  key: "isLiked",
  default: false,
});
export const searchTypedAtom = atom({
  key: "typed",
  default: "",
})
export const marineAtom = atom({
  key: "isOn",
  default: false,
})