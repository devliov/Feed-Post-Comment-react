import { PencilLine } from "phosphor-react";

import styles from "./SideBar.module.css";
import { Avatar } from "../components/avatar/Avatar";

export default function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40"
      />
      <div className={styles.profile}>
        <Avatar
          hasBorder
          src="https://avatars.githubusercontent.com/u/128882211?v=4"
        />

        <strong>Eli Sousa</strong>
        <br />
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="">
          <PencilLine size={20} />
          Editar seu Perfil
        </a>
      </footer>
    </aside>
  );
}
