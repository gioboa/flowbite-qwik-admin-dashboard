import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import { isBrowser, isServer } from "@builder.io/qwik/build";
import { ArrowDown } from "./icons/ArrowDown";
import { ArrowRight } from "./icons/ArrowRight";

export const TableFooter = component$(() => {
  const showSig = useSignal(false);
  const elementRef = useSignal<Element>();

  useTask$(({ track, cleanup }) => {
    track(() => showSig.value);

    if (isServer) return;

    const handleClick = (event: Event) => {
      if (!elementRef.value?.contains(event.target as Node)) {
        showSig.value = false;
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        showSig.value = false;
      }
    };

    if (showSig.value && isBrowser) {
      document.addEventListener("click", handleClick);
      document.addEventListener("keydown", handleKeyDown);
    }

    cleanup(() => {
      if (isBrowser) {
        document.removeEventListener("click", handleClick);
        document.removeEventListener("keydown", handleKeyDown);
      }
    });
  });

  return (
    <div class="flex items-center justify-between pt-3 sm:pt-6">
      <span class="text-sm text-gray-600">
        <div class="w-fit dark:text-white">
          <button
            class="flex items-center"
            onClick$={() => {
              showSig.value = !showSig.value;
            }}
          >
            Last 7 days
            <ArrowDown />
          </button>
        </div>
        {showSig.value && (
          <div
            class="absolute z-10 w-fit divide-y divide-gray-100 rounded-xl border border-gray-200 bg-white text-gray-900  shadow transition-opacity duration-100 dark:border-none dark:bg-gray-700 dark:text-white"
            role="tooltip"
            ref={elementRef}
          >
            <div class="rounded-xl text-sm text-gray-700 dark:text-gray-200">
              <ul class="">
                <li class="flex cursor-pointer items-center justify-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                  <strong>Sep 16, 2024 - Sep 22, 2024</strong>
                </li>
                <div class="my-1 h-px bg-gray-100 dark:bg-gray-600"></div>
                <li class="flex cursor-pointer items-center justify-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                  Yesterday
                </li>
                <li class="flex cursor-pointer items-center justify-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                  Today
                </li>
                <li class="flex cursor-pointer items-center justify-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                  Last 7 days
                </li>
                <li class="flex cursor-pointer items-center justify-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                  Last 30 days
                </li>
                <li class="flex cursor-pointer items-center justify-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                  Last 90 days
                </li>
                <div class="my-1 h-px bg-gray-100 dark:bg-gray-600"></div>
                <li class="flex cursor-pointer items-center justify-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                  Custom...
                </li>
              </ul>
            </div>
          </div>
        )}
      </span>
      <div class="shrink-0">
        <a
          href="#"
          class="text-primary-700 dark:text-primary-500 inline-flex items-center rounded-lg p-2 text-xs font-medium uppercase hover:bg-gray-100 dark:hover:bg-gray-700 sm:text-sm"
        >
          Report
          <ArrowRight />
        </a>
      </div>
    </div>
  );
});
