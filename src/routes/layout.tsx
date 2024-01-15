import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { Aside } from "~/components/Aside";
import { Navbar } from "~/components/Navbar";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <div class="bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div class="flex items-start pt-16">
        <Aside />
        <main class="relative ml-64 h-full w-full overflow-y-auto">
          <Slot />
        </main>
      </div>
    </div>
  );
});
