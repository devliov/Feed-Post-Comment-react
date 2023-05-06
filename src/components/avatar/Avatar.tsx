import styles from "./Avatar.module.css";

interface AvatarProps {
  hasBorder?: boolean ;
  src?:string;
  alt?: string ;
}

//aplicar desistruturacao de objeto no parametro em vez de props ex: props.hasBorder e props.src
export function Avatar({ hasBorder = true, src } : AvatarProps) {
  return (
    <>
      <img
        className={hasBorder ? styles.avatarWithBorder : styles.avatar}
        src={src}
      />
    </>
  );
}
