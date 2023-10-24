import styles from "./post.module.css"
import Image from "next/image"

export default function Post1() {
    return (
        <div className={styles.post_container}>
            <div className={styles.post_body}>
                <div className={styles.post_perfil}>
                    <div className={styles.post_follow}>
                        <Image src={"/heavy.png"} alt={""} width={98} height={89}></Image>
                        <Image src={"/seguir.png"} alt={""} width={32} height={43}></Image>
                        <p>seguir</p>
                    </div>
                    <p>Heavy Weapons Guy</p>
                </div>

                <div>
                    
                </div>
            </div>
        </div>
    )
}