import Image from "next/image"
import Link from "next/link"
import styles from "./header.module.css"

export default function Head() {

    return (
        <div className={styles.header_container}>
            <nav>
                <div className={styles.slogan}>
                    <Link href="/"/>
                    <Image
                        src="/think&share.png"
                        alt="Think&Share slogan"
                        width={130}
                        height={85}
                    />
                </div>
                <div className={styles.search_bar}>
                    <input type="text" placeholder="Pesquisar" />
                    <button>
                        <Image
                            src="/icons8-pesquisar.svg"
                            alt="search icon"
                            width={30}
                            height={30}
                        />
                    </button>
                </div>
                <div className={styles.icons_container}>
                    <div>
                        <Link href=""/>
                        <Image
                            src="/home-menu-community-svgrepo-com.svg"
                            alt="community icon"
                            width={70}
                            height={70}
                        />
                    </div>
                    <div>
                        <Link href=""/>
                        <Image
                            src="/profile-circle-svgrepo-com.svg"
                            alt="profile icon"
                            width={70}
                            height={70}
                        />
                    </div>
                </div>
            </nav>
        </div>
    )
}