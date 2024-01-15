import { component$ } from "@builder.io/qwik";

export const MoonIcon = component$(() => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    stroke-width="0"
    viewBox="0 0 20 20"
    aria-label="Currently light mode"
    class="h-5 w-5"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
  </svg>
));
