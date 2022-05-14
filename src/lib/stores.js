import { writable } from 'svelte/store';

export const open = writable(false);
export const color = writable(44);
export const colorTwo = writable((44 + 180) % 360);
export const colorMode = writable(true);
