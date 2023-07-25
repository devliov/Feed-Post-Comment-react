import Header from "./components/header/Header";
import { Post, PostType } from "./components/posts/Post";
import SideBar from "./sideBar/SideBar";
import styles from "./App.module.css";
import "./global.css";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/128882211?v=4",
      name: " Eli Sousa",
      role: "Developer",
    },
    content: [
      { type: "paragraph", content: "Fala Galera" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifólio.É um projeto que eu fiz na Rocketseat",
      },
      { type: "link", content: "eli.design/ingite" },
    ],
    publishedAt: new Date("2023-05-05 12:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/128882211?v=4",
      name: " Eli Sousa",
      role: "Developer",
    },
    content: [
      { type: "paragraph", content: "Fala Galera" },
      {
        type: "paragraph",
        content: "Criei uma tabuada muito top confiram lá!",
      },
      { type: "link", content: "eli.design/ingite" },
    ],
    publishedAt: new Date("2023-04-05 12:00"),
  },
];

export default function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </div>
  );
}
