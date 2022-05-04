import { writable } from 'svelte/store';

export const open = writable(false);
export const color = writable([206.5, 206.5]);
export const colorTwo = writable([(206.5 + 180) % 360, 206.5]);
