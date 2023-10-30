import styles from "./perfil.module.css"
import Image from "../../../node_modules/next/image"
import Link from "../../../node_modules/next/link"

export default function Perfil() {
    return (
        <div className={styles.main_body}>
            <div className={styles.perfil}>
                <Image className={styles.foto} src={"/perfil.png"} alt={"imagem de perfil"} width={98} height={89} />
                <input className={styles.compartilhar_post} type="text" placeholder="Compartilhe o que está pensando" />
                <Link href={"/criar_post"} className={styles.button_criar}>Criar <Image src="/caneta.png" width={25} height={25} alt={""} /></Link>
            </div>
        </div>
    )
}