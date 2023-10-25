import Header from "@/components/header/header";
import styles from "./page.module.css"
import Image from "next/image"
import Sidebar from "@/components/sidebar/sidebar";

export default function Login() {
    return (
        <div className={styles.perfil_container}>
            <Header></Header>
            <div className={styles.perfil_body}>
                <Sidebar></Sidebar>
                <div className={styles.perfil_noBody}>
                    <div className={styles.perfil_top}>
                        <div className={styles.perfil_user}>
                            <div className={styles.perfil_name}>
                                <Image className={styles.perfil_icon} src={"/perfil.png"} alt={""} width={98} height={89} />
                                <div className={styles.perfil_noImage}>
                                    <p>Engineer from Team Fortress</p>
                                    <div className={styles.perfil_follow}>
                                        <Image src={"/seguir.png"} alt={""} width={32} height={43}></Image>
                                        <div className={styles.perfil_numFolow}>
                                            <p>10 Seguidores</p>
                                            <p>30 Seguindo</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className={styles.perfil_desc}>Dell Conagher, better known as the Engineer, is a major protagonist and one of the nine playable classes in Team Fortress 2. He is a soft-spoken and amiable Texan with an interest in all things mechanical.</p>
                        </div>

                        <div className={styles.perfil_comu}>
                            <Image src={"/Add_Book.png"} alt={""} width={74} height={63} />
                            <h2>Você ainda não adicionou nenhum tópico ou comunidade.</h2>
                        </div>
                    </div>
                    <div className={styles.perfil_post}>
                        <Image src={"/Sad_Cloud.png"} alt={""} width={90} height={90} />
                        <h2>Você não compartilhou, respondeu ou postou nada ainda.</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}