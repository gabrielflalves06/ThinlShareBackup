import styles from "./page.module.css"
import Image from "../../../node_modules/next/image"
import Link from "../../../node_modules/next/link"

export default function Post() {
    return (
        <div className={styles.post_body}>
            <div className={styles.post_container}>
                <input type="text" name="email" id="titulo" placeholder="Adicone o titulo aqui" className={styles.post_titulo} />
                <input type="text" name="email" id="conteudo" placeholder="O que você está pensando??" className={styles.post_texto} />
                <input type="" name="email" id="image" placeholder="Upload de arquivos aqui" className={styles.post_image} />
                <div className={styles.button_container}>
                    <button type="button" className={styles.button_criar}>Criar <Image src="/caneta.png" width={25} height={25} alt={""} /></button>
                    <Link className={styles.button_cancelar} href={"/"}>Cancelar <Image src="/cancelar.png" width={25} height={25} alt={""} /></Link>
                </div>
                
            </div>
        </div>
    )
}