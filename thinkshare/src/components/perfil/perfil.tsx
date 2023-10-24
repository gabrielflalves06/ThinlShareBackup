import styles from "./main.module.css"
import Image from "next/image"

export default function Perfil() {
    return (
        <main className={styles.main_container}>
            <div className={styles.main_body}>
                <div className={styles.perfil}>
                    <Image className={styles.foto} src={"/perfil.png"} alt={"imagem de perfil"} width={98} height={89}/>                    
                    <input className={styles.compartilhar_post} type="text" placeholder="Compartilhe o que está pensando" />
                    <button type="button" className={styles.button_criar}>Criar <Image src="/caneta.png" width={25} height={25} alt={""} /></button>
                </div>
            </div>
        </main>
    )
}