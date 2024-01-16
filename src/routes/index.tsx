import { component$ } from "@builder.io/qwik";
import { Table } from "~/components/Table";
import ImgBonnieGreen from "../../public/users/bonnie-green.png?jsx";
import ImgLanaByrd from "../../public/users/lana-byrd.png?jsx";
import ImgMichaelGough from "../../public/users/michael-gough.png?jsx";
import ImgNeilSims from "../../public/users/neil-sims.png?jsx";
import ImgThomasLean from "../../public/users/thomas-lean.png?jsx";

export default component$(() => {
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
                {["Transaction", "Date Time", "Amount", "Status"].map(
                  (name, key) => (
                    <th key={key} class="px-6 py-3">
                      {name}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody class="bg-white dark:bg-gray-800">
              <tr class="odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                <td class="whitespace-nowrap p-4 px-6 py-4 text-sm font-normal text-gray-900 dark:text-white">
                  Payment from <span class="font-semibold">Bonnie Green</span>
                </td>
                <td class="whitespace-nowrap p-4 px-6 py-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                  Apr 23, 2024
                </td>
                <td class="whitespace-nowrap p-4 px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white">
                  $2300
                </td>
                <td class="flex whitespace-nowrap p-4 px-6 py-4">
                  <span class="flex h-fit items-center gap-1 rounded-full bg-green-100 p-1 px-2 py-1 text-xs font-semibold text-green-800 group-hover:bg-green-200 dark:bg-green-200 dark:text-green-900 dark:group-hover:bg-green-300">
                    <span>Completed</span>
                  </span>
                </td>
              </tr>
              <tr class="odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                <td class="whitespace-nowrap p-4 px-6 py-4 text-sm font-normal text-gray-900 dark:text-white">
                  Payment refund to <span class="font-semibold">#00910</span>
                </td>
                <td class="whitespace-nowrap p-4 px-6 py-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                  Apr 23, 2024
                </td>
                <td class="whitespace-nowrap p-4 px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white">
                  -$670
                </td>
                <td class="flex whitespace-nowrap p-4 px-6 py-4">
                  <span class="flex h-fit items-center gap-1 rounded-full bg-green-100 p-1 px-2 py-1 text-xs font-semibold text-green-800 group-hover:bg-green-200 dark:bg-green-200 dark:text-green-900 dark:group-hover:bg-green-300">
                    <span>Completed</span>
                  </span>
                </td>
              </tr>
              <tr class="odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                <td class="whitespace-nowrap p-4 px-6 py-4 text-sm font-normal text-gray-900 dark:text-white">
                  Payment failed from <span class="font-semibold">#087651</span>
                </td>
                <td class="whitespace-nowrap p-4 px-6 py-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                  Apr 18, 2024
                </td>
                <td class="whitespace-nowrap p-4 px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white">
                  $234
                </td>
                <td class="flex whitespace-nowrap p-4 px-6 py-4">
                  <span class="flex h-fit items-center gap-1 rounded-full bg-red-100 p-1 px-2 py-1 text-xs font-semibold text-red-800 group-hover:bg-red-200 dark:bg-red-200 dark:text-red-900 dark:group-hover:bg-red-300">
                    <span>Cancelled</span>
                  </span>
                </td>
              </tr>
              <tr class="odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                <td class="whitespace-nowrap p-4 px-6 py-4 text-sm font-normal text-gray-900 dark:text-white">
                  Payment from <span class="font-semibold">Lana Byrd</span>
                </td>
                <td class="whitespace-nowrap p-4 px-6 py-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                  Apr 15, 2024
                </td>
                <td class="whitespace-nowrap p-4 px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white">
                  $5000
                </td>
                <td class="flex whitespace-nowrap p-4 px-6 py-4">
                  <span class="mr-2 rounded-md bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:bg-purple-200">
                    In progress
                  </span>
                </td>
              </tr>
              <tr class="odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                <td class="whitespace-nowrap p-4 px-6 py-4 text-sm font-normal text-gray-900 dark:text-white">
                  Payment from <span class="font-semibold">Jese Leos</span>
                </td>
                <td class="whitespace-nowrap p-4 px-6 py-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                  Apr 15, 2024
                </td>
                <td class="whitespace-nowrap p-4 px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white">
                  $2300
                </td>
                <td class="flex whitespace-nowrap p-4 px-6 py-4">
                  <span class="flex h-fit items-center gap-1 rounded-full bg-green-100 p-1 px-2 py-1 text-xs font-semibold text-green-800 group-hover:bg-green-200 dark:bg-green-200 dark:text-green-900 dark:group-hover:bg-green-300">
                    <span>Completed</span>
                  </span>
                </td>
              </tr>
              <tr class="odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                <td class="whitespace-nowrap p-4 px-6 py-4 text-sm font-normal text-gray-900 dark:text-white">
                  Payment from <span class="font-semibold">THEMESBERG LLC</span>
                </td>
                <td class="whitespace-nowrap p-4 px-6 py-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                  Apr 11, 2024
                </td>
                <td class="whitespace-nowrap p-4 px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white">
                  $560
                </td>
                <td class="flex whitespace-nowrap p-4 px-6 py-4">
                  <span class="flex h-fit items-center gap-1 rounded-full bg-green-100 p-1 px-2 py-1 text-xs font-semibold text-green-800 group-hover:bg-green-200 dark:bg-green-200 dark:text-green-900 dark:group-hover:bg-green-300">
                    <span>Completed</span>
                  </span>
                </td>
              </tr>
              <tr class="odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                <td class="whitespace-nowrap p-4 px-6 py-4 text-sm font-normal text-gray-900 dark:text-white">
                  Payment from <span class="font-semibold">Lana Lysle</span>
                </td>
                <td class="whitespace-nowrap p-4 px-6 py-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                  Apr 6, 2024
                </td>
                <td class="whitespace-nowrap p-4 px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white">
                  $1437
                </td>
                <td class="flex whitespace-nowrap p-4 px-6 py-4">
                  <span class="flex h-fit items-center gap-1 rounded-full bg-green-100 p-1 px-2 py-1 text-xs font-semibold text-green-800 group-hover:bg-green-200 dark:bg-green-200 dark:text-green-900 dark:group-hover:bg-green-300">
                    <span>Completed</span>
                  </span>
                </td>
              </tr>
              <tr class="odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                <td class="whitespace-nowrap p-4 px-6 py-4 text-sm font-normal text-gray-900 dark:text-white">
                  Payment to <span class="font-semibold">Joseph Mcfall</span>
                </td>
                <td class="whitespace-nowrap p-4 px-6 py-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                  Apr 1, 2024
                </td>
                <td class="whitespace-nowrap p-4 px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white">
                  $980
                </td>
                <td class="flex whitespace-nowrap p-4 px-6 py-4">
                  <span class="flex h-fit items-center gap-1 rounded-full bg-green-100 p-1 px-2 py-1 text-xs font-semibold text-green-800 group-hover:bg-green-200 dark:bg-green-200 dark:text-green-900 dark:group-hover:bg-green-300">
                    <span>Completed</span>
                  </span>
                </td>
              </tr>
              <tr class="odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                <td class="whitespace-nowrap p-4 px-6 py-4 text-sm font-normal text-gray-900 dark:text-white">
                  Payment from <span class="font-semibold">Alphabet LLC</span>
                </td>
                <td class="whitespace-nowrap p-4 px-6 py-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                  Mar 23, 2024
                </td>
                <td class="whitespace-nowrap p-4 px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white">
                  $11,436
                </td>
                <td class="flex whitespace-nowrap p-4 px-6 py-4">
                  <span class="mr-2 rounded-md bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:bg-purple-200">
                    In progress
                  </span>
                </td>
              </tr>
              <tr class="odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                <td class="whitespace-nowrap p-4 px-6 py-4 text-sm font-normal text-gray-900 dark:text-white">
                  Payment from <span class="font-semibold">Bonnie Green</span>
                </td>
                <td class="whitespace-nowrap p-4 px-6 py-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                  Mar 23, 2024
                </td>
                <td class="whitespace-nowrap p-4 px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white">
                  $560
                </td>
                <td class="flex whitespace-nowrap p-4 px-6 py-4">
                  <span class="flex h-fit items-center gap-1 rounded-full bg-green-100 p-1 px-2 py-1 text-xs font-semibold text-green-800 group-hover:bg-green-200 dark:bg-green-200 dark:text-green-900 dark:group-hover:bg-green-300">
                    <span>Completed</span>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Table>
      <Table title="Latest Customers">
        <div q:slot="body">
          <div class="flow-root">
            <ul class="divide-y divide-gray-200 dark:divide-gray-700">
              <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                  <div class="shrink-0">
                    <ImgNeilSims class="h-8 w-8 rounded-full" />
                  </div>
                  <div class="min-w-0 flex-1">
                    <p class="truncate text-sm font-medium text-gray-900 dark:text-white">
                      Neil Sims
                    </p>
                    <p class="truncate text-sm text-gray-500 dark:text-gray-400">
                      email@flowbite.com
                    </p>
                  </div>
                  <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $320
                  </div>
                </div>
              </li>
              <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                  <div class="shrink-0">
                    <ImgBonnieGreen class="h-8 w-8 rounded-full" />
                  </div>
                  <div class="min-w-0 flex-1">
                    <p class="truncate text-sm font-medium text-gray-900 dark:text-white">
                      Bonnie Green
                    </p>
                    <p class="truncate text-sm text-gray-500 dark:text-gray-400">
                      email@flowbite.com
                    </p>
                  </div>
                  <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $3467
                  </div>
                </div>
              </li>
              <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                  <div class="shrink-0">
                    <ImgMichaelGough class="h-8 w-8 rounded-full" />
                  </div>
                  <div class="min-w-0 flex-1">
                    <p class="truncate text-sm font-medium text-gray-900 dark:text-white">
                      Michael Gough
                    </p>
                    <p class="truncate text-sm text-gray-500 dark:text-gray-400">
                      email@flowbite.com
                    </p>
                  </div>
                  <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $67
                  </div>
                </div>
              </li>
              <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                  <div class="shrink-0">
                    <ImgThomasLean class="h-8 w-8 rounded-full" />
                  </div>
                  <div class="min-w-0 flex-1">
                    <p class="truncate text-sm font-medium text-gray-900 dark:text-white">
                      Thomes Lean
                    </p>
                    <p class="truncate text-sm text-gray-500 dark:text-gray-400">
                      email@flowbite.com
                    </p>
                  </div>
                  <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $2367
                  </div>
                </div>
              </li>
              <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                  <div class="shrink-0">
                    <ImgLanaByrd class="h-8 w-8 rounded-full" />
                  </div>
                  <div class="min-w-0 flex-1">
                    <p class="truncate text-sm font-medium text-gray-900 dark:text-white">
                      Lana Byrd
                    </p>
                    <p class="truncate text-sm text-gray-500 dark:text-gray-400">
                      email@flowbite.com
                    </p>
                  </div>
                  <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $367
                  </div>
                </div>
              </li>
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
                        <tr class="text-gray-500 dark:text-gray-400">
                          <td class="whitespace-nowrap border-t-0 p-4 px-6 py-4 text-left align-middle text-sm font-normal">
                            Organic Search
                          </td>
                          <td class="whitespace-nowrap border-t-0 p-4 px-6 py-4 align-middle text-xs font-medium text-gray-900 dark:text-white">
                            5,649
                          </td>
                          <td class="whitespace-nowrap border-t-0 p-4 px-6 py-4 align-middle text-xs">
                            <div class="flex items-center">
                              <span class="mr-2 text-xs font-medium">30%</span>
                              <div class="relative w-full">
                                <div class="h-2 w-full rounded-sm bg-gray-200 dark:bg-gray-700">
                                  <div
                                    class="bg-primary-700 h-2 rounded-sm"
                                    style="width: 30%;"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr class="text-gray-500 dark:text-gray-400">
                          <td class="whitespace-nowrap border-t-0 p-4 px-6 py-4 text-left align-middle text-sm font-normal">
                            Referral
                          </td>
                          <td class="whitespace-nowrap border-t-0 p-4 px-6 py-4 align-middle text-xs font-medium text-gray-900 dark:text-white">
                            4,025
                          </td>
                          <td class="whitespace-nowrap border-t-0 p-4 px-6 py-4 align-middle text-xs">
                            <div class="flex items-center">
                              <span class="mr-2 text-xs font-medium">24%</span>
                              <div class="relative w-full">
                                <div class="h-2 w-full rounded-sm bg-gray-200 dark:bg-gray-700">
                                  <div
                                    class="h-2 rounded-sm bg-orange-300"
                                    style="width: 24%;"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr class="text-gray-500 dark:text-gray-400">
                          <td class="whitespace-nowrap border-t-0 p-4 px-6 py-4 text-left align-middle text-sm font-normal">
                            Direct
                          </td>
                          <td class="whitespace-nowrap border-t-0 p-4 px-6 py-4 align-middle text-xs font-medium text-gray-900 dark:text-white">
                            3,105
                          </td>
                          <td class="whitespace-nowrap border-t-0 p-4 px-6 py-4 align-middle text-xs">
                            <div class="flex items-center">
                              <span class="mr-2 text-xs font-medium">18%</span>
                              <div class="relative w-full">
                                <div class="h-2 w-full rounded-sm bg-gray-200 dark:bg-gray-700">
                                  <div
                                    class="h-2 rounded-sm bg-teal-400"
                                    style="width: 18%;"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr class="text-gray-500 dark:text-gray-400">
                          <td class="whitespace-nowrap border-t-0 p-4 px-6 py-4 text-left align-middle text-sm font-normal">
                            Social
                          </td>
                          <td class="whitespace-nowrap border-t-0 p-4 px-6 py-4 align-middle text-xs font-medium text-gray-900 dark:text-white">
                            1251
                          </td>
                          <td class="whitespace-nowrap border-t-0 p-4 px-6 py-4 align-middle text-xs">
                            <div class="flex items-center">
                              <span class="mr-2 text-xs font-medium">12%</span>
                              <div class="relative w-full">
                                <div class="h-2 w-full rounded-sm bg-gray-200 dark:bg-gray-700">
                                  <div
                                    class="h-2 rounded-sm bg-pink-600"
                                    style="width: 12%;"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr class="text-gray-500 dark:text-gray-400">
                          <td class="whitespace-nowrap border-t-0 p-4 px-6 py-4 text-left align-middle text-sm font-normal">
                            Other
                          </td>
                          <td class="whitespace-nowrap border-t-0 p-4 px-6 py-4 align-middle text-xs font-medium text-gray-900 dark:text-white">
                            734
                          </td>
                          <td class="whitespace-nowrap border-t-0 p-4 px-6 py-4 align-middle text-xs">
                            <div class="flex items-center">
                              <span class="mr-2 text-xs font-medium">9%</span>
                              <div class="relative w-full">
                                <div class="h-2 w-full rounded-sm bg-gray-200 dark:bg-gray-700">
                                  <div
                                    class="h-2 rounded-sm bg-indigo-600"
                                    style="width: 9%;"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr class="text-gray-500 dark:text-gray-400">
                          <td class="whitespace-nowrap border-t-0 p-4 px-6 py-4 text-left align-middle text-sm font-normal">
                            Email
                          </td>
                          <td class="whitespace-nowrap border-t-0 p-4 px-6 py-4 align-middle text-xs font-medium text-gray-900 dark:text-white">
                            456
                          </td>
                          <td class="whitespace-nowrap border-t-0 p-4 px-6 py-4 align-middle text-xs">
                            <div class="flex items-center">
                              <span class="mr-2 text-xs font-medium">7%</span>
                              <div class="relative w-full">
                                <div class="h-2 w-full rounded-sm bg-gray-200 dark:bg-gray-700">
                                  <div
                                    class="h-2 rounded-sm bg-purple-500"
                                    style="width: 7%;"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
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
