import { Slot, component$ } from "@builder.io/qwik";
import { TableFooter } from "./TableFooter";

type Props = {
  title: string;
  subtitle?: string;
};

export const Table = component$<Props>(({ title, subtitle }) => {
  return (
    <div class="mb-6 rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
      <div class="mb-4 flex items-center justify-between">
        <div>
          <h3 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">
            {title}
          </h3>
          {subtitle && (
            <span class="text-base font-normal text-gray-600 dark:text-gray-400">
              {subtitle}
            </span>
          )}
        </div>
        <div class="shrink-0">
          <a
            href="#"
            class="text-primary-700 dark:text-primary-500 rounded-lg p-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            View all
          </a>
        </div>
      </div>
      <div class="mt-8 flex flex-col">
        <div class="overflow-x-auto rounded-lg">
          <div class="inline-block min-w-full align-middle">
            <div class="overflow-hidden shadow sm:rounded-lg">
              <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <Slot name="body" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <TableFooter />
    </div>
  );
});
