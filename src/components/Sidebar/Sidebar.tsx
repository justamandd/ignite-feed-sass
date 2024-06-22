import styles from '/src/components/Sidebar/_sidebar.module.sass'

import { PencilLine } from 'phosphor-react'

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
      src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      className={styles.cover}
      alt="imagem de capa do usuário" />

      <div className={styles.profile}>
        <img src="https://github.com/justamandd.png" alt="" className={styles.avatar} />

        <strong>Vitor Justamand</strong>
        <span>Web developer</span>
      </div>

      <footer>
        <a href="">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}