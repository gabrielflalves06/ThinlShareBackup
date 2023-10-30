import styles from "./sidebar.module.css"
import Image from "../../../node_modules/next/image"
import Link from "../../../node_modules/next/link"

export default function Sidebar() {
    return (
        <div className={styles.sidebar_container}>
            <div className={styles.sidebar}>
                <Link className={styles.criar} href={"/criar_comu"}><Image src={"/Plus.png"} alt={"mais"} width={25} height={22} />Cria Comunidade</Link>
                <hr></hr>
                <p className={styles.games}>Games <Image src={"/Games.png"} alt={"mais"} width={25} height={22} /></p>
                <p className={styles.design}>Design <Image src={"/Design.png"} alt={"mais"} width={25} height={22} /></p>
                <p className={styles.ciencia}>Ciência <Image src={"/Ciencia.png"} alt={"mais"} width={25} height={22} /></p>
                <p className={styles.tecnologia}>Tecnologia <Image src={"/Tecnologia.png"} alt={"mais"} width={25} height={22} /></p>
                <p className={styles.artes}>Artes <Image src={"/Artes.png"} alt={"mais"} width={25} height={22} /></p>
                <hr></hr>
                <p className={styles.explorar}>Explorar <Image src={"/Explorar.png"} alt={"mais"} width={25} height={22} /></p>
            </div>
        </div>
    )
}