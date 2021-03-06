import { writable } from 'svelte/store';

export const open = writable(false);
export const color = writable(83);
export const colorMode = writable(true);
// assume mobile so we load less
export const onMobileDevice = writable(true);
