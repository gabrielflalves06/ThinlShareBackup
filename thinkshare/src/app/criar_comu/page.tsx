import styles from "./page.module.css"
import Image from "../../../node_modules/next/image"
import Link from "../../../node_modules/next/link"

export default function Post() {
    return (
        <div className={styles.comu_body}>
            <div className={styles.comu_container}>
                <div className={styles.primeira}>
                    <input type="" name="email" id="image" placeholder="Foto da comunidade" className={styles.comu_image} />
                    <input type="text" name="email" id="titulo" placeholder="Adicone o nome da comunidade" className={styles.comu_nome} />
                </div>
                <input type="text" name="email" id="conteudo" placeholder="O que você está pensando??" className={styles.post_texto} />
                <input type="text" name="email" id="conteudo" placeholder="Adicione tópicos" className={styles.post_texto} />
                <div className={styles.button_container}>
                    <button type="button" className={styles.button_criar}>Criar <Image src="/caneta.png" width={25} height={25} alt={""} /></button>
                    <Link className={styles.button_cancelar} href={"/"}>Cancelar <Image src="/cancelar.png" width={25} height={25} alt={""} /></Link>
                </div>
            </div>
        </div>
    )
}