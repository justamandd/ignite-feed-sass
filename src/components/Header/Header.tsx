import styles from '/src/components/Header/_header.module.sass'
import igniteLogo from '/src/assets/ignite-logo.svg'

export default function Header() {


    return (
        <div className={styles.container}>   
            <a href="/" >
                <img src={igniteLogo} alt="" />
            </a>
        </div>
    )
}