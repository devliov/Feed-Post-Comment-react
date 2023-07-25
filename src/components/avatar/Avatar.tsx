import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";

interface AvatarProps  extends ImgHTMLAttributes<HTMLImageElement>{
  hasBorder?: boolean ;
}

//aplicar desistruturacao de objeto no parametro em vez de props ex: props.hasBorder e props.src
export function Avatar({ hasBorder = true, src, ...props} : AvatarProps) {
  return (
    <>
      <img
        className={hasBorder ? styles.avatarWithBorder : styles.avatar}
        src={src}
        {...props}
      />
    </>
  );
}
