import styles from "./page.module.css"
import Image from "../../../node_modules/next/image"
import Link from "../../../node_modules/next/link"

export default function Cadastro() {
    return (
        <div className={styles.cad_body}>
            <div className={styles.cad_container}>
                <div className={styles.slogan_container}>
                    <Image
                        src="/think&share.png"
                        alt="Think&Share slogan"
                        width={200}
                        height={146} />
                </div>
                <form action="">
                    <input type="text" name="Nome" id="Nome" placeholder="Nome" />
                    <input type="email" name="email" id="email" placeholder="Email ou Telefone" />
                    <input type="password" name="senha" id="senha" placeholder="senha" />
                    <input type="password" name="senha" id="senha" placeholder="Confirmar senha" />

                </form>
                <Link className={styles.cad_buttom}  href={"/"}>Cadastro</Link>
                <Link className={styles.cad_login} href={"/login"}>Já possui uma conta??</Link>
            </div>
        </div>
    )
}