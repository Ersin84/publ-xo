import { nanoid } from "@reduxjs/toolkit";
// Seeds data: 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-
// Domain: https://nanoid.yuuniworks.com/     https://zelark.github.io/nano-id-cc/
// id length: 12
// Results: vLtzAT4LM9lE

export default function ncNanoId(prefix = "z1KisuuzAY0q3a-Bf-M3Y") {
  return prefix + nanoid() + "_";
}
