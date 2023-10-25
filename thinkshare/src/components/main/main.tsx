import Perfil from "../perfil/perfil"
import Post1 from "../post1/post1"
import styles from "./main.module.css"

interface FetchPost {
    profileImg: string,
    profileName: string,
    postTitle: string,
    postContent: string,
    postImage: string,
    reactions: {
        quantity: number,
        type: string
    },
    comments: {
        quantity: number,
        profile: {
            profileImg: string,
            profileName: string,
            content: string,
            reactions: {
                quantity: number,
                type: string,
            },
        },
    },
}

export default function Main({ posts }: { posts: FetchPost[] }) {
    return (
        <main className={styles.main_container}>
            <Perfil></Perfil>
            <Post1></Post1>
            <Post1></Post1>
        </main>
    )
}