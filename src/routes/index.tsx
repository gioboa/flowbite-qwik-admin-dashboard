import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Table } from "~/components/Table";
import { Table1, Table2, Table3 } from "~/mocks/index.mocks";

export const useTable1 = routeLoader$(() => Table1);
export const useTable2 = routeLoader$(() => Table2);
export const useTable3 = routeLoader$(() => Table3);

export default component$(() => {
  const table1Sig = useTable1();
  const table2Sig = useTable2();
  const table3Sig = useTable3();
  return (
    <div class="mt-6 px-4">
      <Table
        title="Latest Transactions"
        subtitle="This is a list of latest transactions"
      >
        <div q:slot="body">
          <table class="w-full min-w-full divide-y divide-gray-200 text-left text-sm text-gray-500 dark:divide-gray-600 dark:text-gray-400">
            <thead class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {table1Sig.value.cols.map((col, key) => (
                  <th key={key} class="px-6 py-3">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody class="bg-white dark:bg-gray-800">
              {table1Sig.value.rows.map((row, key) => {
                return (
                  <tr
                    key={key}
                    class="odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
                  >
                    <td class="whitespace-nowrap p-4 px-6 py-4 text-sm font-normal text-gray-900 dark:text-white">
                      Payment from <span class="font-semibold">{row.name}</span>
                    </td>
                    <td class="whitespace-nowrap p-4 px-6 py-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                      {row.date}
                    </td>
                    <td class="whitespace-nowrap p-4 px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white">
                      {row.amount}
                    </td>
                    <td class="flex whitespace-nowrap p-4 px-6 py-4">
                      <span
                        class={{
                          "flex h-fit items-center gap-1 rounded-full  p-1 px-2 py-1 text-xs font-semibold ":
                            true,
                          "bg-green-100 text-green-800 group-hover:bg-green-200 dark:bg-green-200 dark:text-green-900 dark:group-hover:bg-green-300":
                            row.status === "Completed",
                          "bg-red-100 text-red-800 group-hover:bg-red-200 dark:bg-red-200 dark:text-red-900 dark:group-hover:bg-red-300":
                            row.status === "Cancelled",
                          "bg-purple-100 text-purple-800 dark:bg-purple-200":
                            row.status === "In progress",
                        }}
                      >
                        <span>{row.status}</span>
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Table>
      <Table title="Latest Customers">
        <div q:slot="body">
          <div class="flow-root">
            <ul class="divide-y divide-gray-200 dark:divide-gray-700">
              {table2Sig.value.rows.map((row, key) => (
                <li key={key} class="py-3 sm:py-4">
                  <div class="flex items-center space-x-4">
                    <div class="shrink-0">{row.icon}</div>
                    <div class="min-w-0 flex-1">
                      <p class="truncate text-sm font-medium text-gray-900 dark:text-white">
                        {row.name}
                      </p>
                      <p class="truncate text-sm text-gray-500 dark:text-gray-400">
                        {row.email}
                      </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      {row.amount}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Table>
      <Table title="Acquisition Overview">
        <div q:slot="body">
          <div class="flex flex-col">
            <div class="overflow-x-auto rounded-lg">
              <div class="inline-block min-w-full align-middle">
                <div class="overflow-hidden shadow sm:rounded-lg">
                  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full min-w-full table-fixed text-left text-sm text-gray-500 dark:text-gray-400">
                      <thead class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                          <th class="whitespace-nowrap rounded-l border-x-0 bg-gray-50 px-6 py-3 text-left align-middle text-xs font-semibold uppercase text-gray-700 dark:bg-gray-700 dark:text-white">
                            Top Channels
                          </th>
                          <th class="whitespace-nowrap border-x-0 bg-gray-50 px-6 py-3 text-left align-middle text-xs font-semibold uppercase text-gray-700 dark:bg-gray-700 dark:text-white">
                            Users
                          </th>
                          <th class="min-w-[140px] whitespace-nowrap rounded-r border-x-0 bg-gray-50 px-6 py-3 text-left align-middle text-xs font-semibold uppercase text-gray-700 dark:bg-gray-700 dark:text-white">
                            Acquisition
                          </th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-gray-100 dark:divide-gray-700">
                        {table3Sig.value.rows.map((row, key) => (
                          <tr
                            key={key}
                            class="text-gray-500 dark:text-gray-400"
                          >
                            <td class="whitespace-nowrap border-t-0 p-4 px-6 py-4 text-left align-middle text-sm font-normal">
                              {row.name}
                            </td>
                            <td class="whitespace-nowrap border-t-0 p-4 px-6 py-4 align-middle text-xs font-medium text-gray-900 dark:text-white">
                              {row.info}
                            </td>
                            <td class="whitespace-nowrap border-t-0 p-4 px-6 py-4 align-middle text-xs">
                              <div class="flex items-center">
                                <span class="mr-2 text-xs font-medium">
                                  {row.width}
                                </span>
                                <div class="relative w-full">
                                  <div class="h-2 w-full rounded-sm bg-gray-200 dark:bg-gray-700">
                                    <div
                                      class={`h-2 rounded-sm ${row.color}`}
                                      style={`width: ${row.width}`}
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Table>
    </div>
  );
});
