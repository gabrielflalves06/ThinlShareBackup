import styles from "./page.module.css"
import Image from "next/image"

export default function Login() {
    return (
        <div className={styles.login_body}>
            <div className={styles.login_container}>
                <div className={styles.slogan_container}>
                    <Image
                        src="/think&share.png"
                        alt="Think&Share slogan"
                        width={180}
                        height={105}/>
                    {/* <span> lugar para compartilhar o que pensa e aprender com quem também</span> */}
                </div>
                <form action="">
                    <label htmlFor="email">Email: </label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        required
                        placeholder="Digite seu email"
                        maxLength={255}/>
                    <label htmlFor="senha">Senha: </label>
                    <input 
                        type="password" 
                        name="senha" 
                        id="senha" 
                        required
                        placeholder="Digite sua senha"
                        maxLength={64}/>
                    <input type="submit" className={styles.submit} value="Login"/>
                </form>
            </div>
        </div>
    );
}