import Comment from '../Comment/Comment'
import styles from '/src/components/Post/_post.module.sass'

// interface PostProps {
//   author: string,
//   content: string
// }

export default function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://github.com/justamandd.png" alt="" className={styles.avatar} />
          <div className={styles.authorInfo}>
            <strong>Vitor Justamand</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title='21 de Junho às 23:40' dateTime='2024-06-21 23:40:00'>Publicado há 1h</time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
      
        <p><a href=''>jane.design/doctorcare</a></p>
      
        <p>
          <a href=''>#novoprojeto</a>{' '}
          <a href=''>#nlw</a>{' '}
          <a href=''>#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder='Deixe um comentário'
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}