import styles from "./page.module.css"
import Image from "../../../node_modules/next/image"
import Link from "../../../node_modules/next/link";

export default function Login() {
    return (
        <div className={styles.login_body}>
            <div className={styles.login_container}>
                <div className={styles.slogan_container}>
                    <Image
                        src="/think&share.png"
                        alt="Think&Share slogan"
                        width={200}
                        height={146} />
                    {/* <span> lugar para compartilhar o que pensa e aprender com quem também</span> */}
                </div>
                <form action="">
                    <input type="email" name="email" id="email" placeholder="Email ou Telefone" />
                    <input type="password" name="senha" id="senha" placeholder="senha" />
                </form>
                <Link className={styles.login_buttom}  href={"/"}>Login</Link>
                <Link className={styles.login_cad} href={"/cadastro"}>Crie uma conta</Link>
            </div>
        </div>
    );
}