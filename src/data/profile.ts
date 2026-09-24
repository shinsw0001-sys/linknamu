export type LinkItem = {
  id: string;
  title: string;
  url: string;
  description?: string;
};

export type Profile = {
  name: string;
  bio: string;
  // public/ 아래 이미지 경로. 비워두면 이름 첫 글자로 표시
  image?: string;
  links: LinkItem[];
};

// TODO: 보여주기용 더미 값. 실제 내용으로 교체
export const profile: Profile = {
  name: "신성웅",
  bio: "AI_Vendetta",
  image: "/profile-guy-fawkes.svg",
  links: [
    { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com/", description: "경력과 이력" },
    { id: "instagram", title: "Instagram", url: "https://www.instagram.com/", description: "일상 기록" },
    { id: "github", title: "GitHub", url: "https://github.com/", description: "코드와 프로젝트 모음" },
  ],
};
