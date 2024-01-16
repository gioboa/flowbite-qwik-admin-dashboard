import { component$, useSignal } from "@builder.io/qwik";
import { MoonIcon } from "./icons/MoonIcon";
import { QwikIcon } from "./icons/QwikIcon";
import { SunIcon } from "./icons/SunIcon";

export const Navbar = component$(() => {
  const themeSig = useSignal<"DARK" | "LIGHT">("LIGHT");

  return (
    <nav class="fixed z-30 w-full border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
      <div class="mx-auto flex flex-wrap items-center justify-between">
        <div class="w-full p-3 lg:px-5 lg:pl-3">
          <div class="flex items-center justify-between">
            <div class="pl-2 pt-2">
              <a href="/" class="flex items-center">
                <QwikIcon theme={themeSig.value} />
              </a>
            </div>
            <div class="flex items-center gap-3">
              <button
                class="rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                type="button"
                aria-label="Toggle dark mode"
                onClick$={() => {
                  themeSig.value = themeSig.value === "DARK" ? "LIGHT" : "DARK";
                  document.body.classList.toggle("dark");
                }}
              >
                {themeSig.value === "DARK" ? <SunIcon /> : <MoonIcon />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
});
