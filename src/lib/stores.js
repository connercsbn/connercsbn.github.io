import { writable } from 'svelte/store';

export const open = writable(false);
export const color = writable([70, 70]);
