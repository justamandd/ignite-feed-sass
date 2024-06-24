import { ThumbsUp, Trash } from 'phosphor-react'
import styles from '/src/components/Comment/_comment.module.sass'
import { Avatar } from '../Avatar/Avatar'

export default function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/justamandd.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Vitor Justamand</strong>
              <time title='21 de Junho às 23:40' dateTime='2024-06-21 23:40:00'>Cerca de 1h atrás</time>
            </div>
            <button title='Deletar comentário'>
              <Trash size={20} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20}/>
            Aplaudir <span>{20}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}