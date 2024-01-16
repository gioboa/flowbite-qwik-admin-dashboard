import { component$ } from "@builder.io/qwik";
import { ArrowDown } from "./icons/ArrowDown";
import { ArrowRight } from "./icons/ArrowRight";

export const TableFooter = component$(() => {
  return (
    <div class="flex items-center justify-between pt-3 sm:pt-6">
      <span class="text-sm text-gray-600">
        <div class="w-fit dark:text-white">
          <button class="flex items-center">
            Last 7 days
            <ArrowDown />
          </button>
        </div>
        <div
          class="invisible z-10 w-fit divide-y divide-gray-100 rounded-xl border border-gray-200 bg-white text-gray-900 opacity-0 shadow transition-opacity duration-100 dark:border-none dark:bg-gray-700 dark:text-white"
          id=":rm:"
          role="tooltip"
          style="position: absolute; top: 1149px; left: 40px;"
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
