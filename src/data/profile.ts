export type LinkItem = {
  id: string;
  title: string;
  url: string;
  description?: string;
  emoji?: string;
};

export type Profile = {
  name: string;
  bio: string;
  // public/ 아래 이미지 경로. 비워두면 이름 첫 글자로 표시
  image?: string;
  // circle: 원형으로 잘라 표시, book: 책 표지처럼 세로 직사각형으로 전체 표시
  imageShape?: "circle" | "book";
  links: LinkItem[];
};

// TODO: 보여주기용 더미 값. 실제 내용으로 교체
export const profile: Profile = {
  name: "신성웅",
  bio: "GeoAI Architect : GIS & Photogrammetry Expert",
  image: "/IMG_6628.jpg",
  links: [
    { id: "linkedin", title: "LinkedIn", emoji: "🐯", url: "https://www.linkedin.com/in/sung-woong-shin-4383a943a", description: "경력과 이력" },
    { id: "github", title: "GitHub", emoji: "🐙", url: "https://github.com/shinsw0001-sys", description: "코드와 프로젝트 모음" },
    { id: "email", title: "Email", emoji: "💌", url: "mailto:shinsw0001@gmail.com", description: "shinsw0001@gmail.com" },
    { id: "phone", title: "Phone", emoji: "📞", url: "tel:+821063195559", description: "+82-10-6319-5559" },
  ],
};
