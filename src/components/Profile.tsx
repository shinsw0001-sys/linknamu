import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  image?: string;
};

export default function Profile({ name, bio, image }: ProfileProps) {
  return (
    <section className="flex flex-col items-center text-center">
      {image ? (
        <Image
          src={image}
          alt={`${name} 프로필 사진`}
          width={160}
          height={160}
          priority
          className="h-40 w-40 rounded-full object-cover ring-4 ring-white shadow-md dark:ring-gray-800"
        />
      ) : (
        <div
          aria-hidden
          className="flex h-40 w-40 items-center justify-center rounded-full bg-emerald-500 text-4xl font-bold text-white ring-4 ring-white shadow-md dark:ring-gray-800"
        >
          {name.charAt(0)}
        </div>
      )}
      <h1 className="mt-5 text-2xl font-bold">{name}</h1>
      <p className="mt-1 text-gray-600 dark:text-gray-400">{bio}</p>
    </section>
  );
}
