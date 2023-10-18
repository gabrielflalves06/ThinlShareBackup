"use client"

import Header from "@/components/header/header"
import Sidebar from "@/components/sidebar/sidebar"
import styles from "./page.module.css"
import { useState } from "react";
import Main from "@/components/main/main";

export default function Home() {

  const [posts, setPosts] = useState([]);

  return (
    <div className={styles.app_container}>
      <Header></Header>
      <div className={styles.main_container}>,
        <Sidebar></Sidebar>
        <Main posts={posts}></Main>
      </div>
    </div>
  )
}
