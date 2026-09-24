import type { LinkItem } from "@/data/profile";

export default function LinkCard({ title, url, description }: LinkItem) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-2xl border border-gray-200 bg-white px-5 py-6 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:border-gray-700 dark:bg-gray-800"
    >
      <span className="block text-lg font-semibold">{title}</span>
      {description && (
        <span className="mt-0.5 block text-sm text-gray-500 dark:text-gray-400">{description}</span>
      )}
    </a>
  );
}
