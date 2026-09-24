import LinkCard from "@/components/LinkCard";
import Profile from "@/components/Profile";
import ThemeToggle from "@/components/ThemeToggle";
import { profile } from "@/data/profile";

// wireframe_ssw.png: 원형 프로필 사진 → 이름 → 한 줄 소개 → 링크 카드 3개 (세로)
export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-md flex-col items-center px-6 pb-12 pt-20 sm:pt-24">
      <div className="absolute right-5 top-5">
        <ThemeToggle />
      </div>

      <Profile name={profile.name} bio={profile.bio} image={profile.image} imageShape={profile.imageShape} />

      <nav aria-label="링크 목록" className="mt-12 flex w-full flex-col gap-5">
        {profile.links.map((link) => (
          <LinkCard key={link.id} {...link} />
        ))}
      </nav>

      <footer className="mt-auto pt-16 text-xs tracking-wide text-slate-400 dark:text-slate-500">링크나무</footer>
    </main>
  );
}
