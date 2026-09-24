import type { LinkItem } from "@/data/profile";

export default function LinkCard({ title, url, description, emoji }: LinkItem) {
  // mailto:, tel: 링크는 새 탭 없이 메일 앱·전화 앱으로 바로 연결
  const external = url.startsWith("http");

  return (
    <a
      href={url}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className="group flex w-full items-center gap-4 rounded-3xl border border-white/60 bg-white/45 px-5 py-4 shadow-[0_8px_30px_-14px_rgba(15,23,42,0.28)] backdrop-blur-xl transition duration-300 hover:border-white/80 hover:bg-white/60 hover:shadow-[0_12px_34px_-14px_rgba(15,23,42,0.34)] focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60 dark:border-white/10 dark:bg-white/[0.06] dark:shadow-[0_8px_30px_-14px_rgba(0,0,0,0.6)] dark:hover:border-white/20 dark:hover:bg-white/[0.09]"
    >
      {emoji && (
        <span
          aria-hidden
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/70 text-xl ring-1 ring-slate-900/5 dark:bg-white/10 dark:ring-white/10"
        >
          {emoji}
        </span>
      )}
      <span className="min-w-0 flex-1 text-left">
        <span className="block font-semibold tracking-tight text-slate-800 dark:text-slate-100">{title}</span>
        {description && (
          <span className="mt-0.5 block truncate text-[13px] text-slate-500 dark:text-slate-400">{description}</span>
        )}
      </span>
      <svg
        aria-hidden
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4 shrink-0 text-slate-400 transition duration-300 group-hover:translate-x-0.5 group-hover:text-slate-600 dark:text-slate-500 dark:group-hover:text-slate-300"
      >
        <path d="M7.5 4.5 13 10l-5.5 5.5" />
      </svg>
    </a>
  );
}
