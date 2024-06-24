import styles from '/src/components/Avatar/_avatar.module.sass'

interface AvatarProps{
  src: string
  hasBorder?: boolean | undefined
}

export function Avatar(props: AvatarProps) {
  const hasBorder = props.hasBorder !== false

  return (
    <img 
      src={props.src}
      alt="Avatar do usuário"
      className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
    />
  )
}