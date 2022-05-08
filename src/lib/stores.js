import { writable } from 'svelte/store';
// between 40 and 160

export const open = writable(false);
export const color = writable(Math.random() * 120 + 40);
export const colorTwo = writable((60 + 180) % 360);
export const colorMode = writable(true);
