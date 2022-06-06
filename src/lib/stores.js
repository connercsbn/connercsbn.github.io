import { writable } from 'svelte/store';

export const open = writable(false);
export const color = writable(73);
export const colorTwo = writable((color + 180) % 360);
export const colorMode = writable(true);
export const userSelectedColor = writable('#ffffff');
