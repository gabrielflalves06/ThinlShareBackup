import styles from "./sidebar.module.css"
import Image from "next/image"
export default function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <p className={styles.criar}><Image src={"/Plus.png"} alt={"mais"} width={25} height={22} />Cria Comunidade</p>
            <hr></hr>
            <p className={styles.games}>Games <Image src={"/Games.png"} alt={"mais"} width={25} height={22} /></p>
            <p className={styles.design}>Design <Image src={"/Design.png"} alt={"mais"} width={25} height={22} /></p>
            <p className={styles.ciencia}>Ciência <Image src={"/Ciencia.png"} alt={"mais"} width={25} height={22} /></p>
            <p className={styles.tecnologia}>Tecnologia <Image src={"/Tecnologia.png"} alt={"mais"} width={25} height={22} /></p>
            <p className={styles.artes}>Artes <Image src={"/Artes.png"} alt={"mais"} width={25} height={22} /></p>
            <hr></hr>
            <p className={styles.explorar}>Explorar <Image src={"/Explorar.png"} alt={"mais"} width={25} height={22} /></p>
        </aside>
    )
}