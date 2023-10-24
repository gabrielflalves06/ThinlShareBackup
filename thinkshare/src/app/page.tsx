"use client"

import Header from "@/components/header/header"
import Sidebar from "@/components/sidebar/sidebar"
import styles from "./page.module.css"
import { useState } from "react";
import Main from "@/components/main/main";
import Perfil from "@/components/perfil/perfil"
import Post1 from "@/components/post1/post1";

export default function Home() {

  const [posts, setPosts] = useState([]);

  return (
    <div className={styles.app_container}>
      <Header></Header>
      <div className={styles.main_container}>
        <Sidebar></Sidebar> 
        <Main posts={posts}></Main>
        <Post1></Post1>
        <Perfil></Perfil>
      </div>
    </div>
  )
}
