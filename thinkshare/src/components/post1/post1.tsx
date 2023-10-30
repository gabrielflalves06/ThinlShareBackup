import styles from "./post1.module.css"
import Image from "next/image"

export default function Post1() {
    return (
        <div className={styles.post_container}>
            <div className={styles.post_superior}>
                <div className={styles.post_perfil}>
                    <div className={styles.post_follow}>
                        <Image src={"/heavy.png"} alt={""} width={98} height={89}></Image>
                        <Image src={"/seguir.png"} alt={""} width={32} height={43}></Image>
                        <p>seguir</p>

                    </div>
                    <p>Heavy Weapons Guy</p>
                </div>
                <div className={styles.post_text}>
                    <p className={styles.post_titulo}>Qual é a coisa mais aleatória sobre computadores que você sabe e a maioria das pessoas não?</p>
                    <p>Quando eu era criança, alguém me disse que você poderia assistir toda a série Star Wars pelo terminal de comandos, apenas com caracteres do teclado. Para um computador Windows: Passo 1: Abra o terminal no seu PC, digite o comando abaixo e pressione ↵Enter. pkgmgr /iu:"TelnetClient" Se você ver uma...</p>
                </div>
            </div>

            <Image className={styles.post_image} src={"/cmd_windows_1.png"} alt={""} width={1116} height={540}/>
        </div>
    )
}