import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  image?: string;
  imageShape?: "circle" | "book";
};

export default function Profile({ name, bio, image, imageShape = "circle" }: ProfileProps) {
  return (
    <section className="flex flex-col items-center text-center">
      {image && imageShape === "book" ? (
        // 책 표지는 자르지 않고 세로 직사각형 그대로
        <Image
          src={image}
          alt={`${name} 프로필 이미지`}
          width={307}
          height={400}
          priority
          className="h-auto w-36 rounded-lg shadow-[0_20px_40px_-16px_rgba(15,23,42,0.5)] ring-1 ring-black/10 dark:ring-white/10"
        />
      ) : (
        <div className="relative">
          {/* 바닥 그림자로 떠 있는 느낌 */}
          <div
            aria-hidden
            className="absolute inset-x-4 -bottom-3 h-8 rounded-full bg-slate-900/25 blur-xl dark:bg-black/60"
          />
          {/* 위는 밝고 아래는 어두운 테두리로 입체감 */}
          <div className="relative rounded-full bg-gradient-to-b from-white to-slate-300 p-[3px] shadow-[0_18px_40px_-14px_rgba(15,23,42,0.45)] dark:from-slate-400 dark:to-slate-800">
            <div className="relative h-36 w-36 overflow-hidden rounded-full bg-slate-200 sm:h-40 sm:w-40 dark:bg-slate-800">
              {image ? (
                <Image
                  src={image}
                  alt={`${name} 프로필 사진`}
                  width={320}
                  height={320}
                  priority
                  className="h-full w-full object-cover"
                />
              ) : (
                <span aria-hidden className="flex h-full w-full items-center justify-center text-4xl font-bold text-slate-500">
                  {name.charAt(0)}
                </span>
              )}
              {/* 안쪽 하이라이트와 음영 */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_2px_4px_rgba(255,255,255,0.35),inset_0_-12px_24px_rgba(15,23,42,0.22)]"
              />
            </div>
          </div>
        </div>
      )}
      <h1 className="mt-7 text-[26px] font-bold tracking-tight text-slate-900 dark:text-white">{name}</h1>
      <p className="mt-2 max-w-xs text-balance text-sm leading-relaxed text-slate-600 dark:text-slate-400">{bio}</p>
    </section>
  );
}
