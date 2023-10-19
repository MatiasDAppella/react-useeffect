import { useRef, useEffect } from "react"
import styles from "./Dialog.module.css"

// eslint-disable-next-line react/prop-types
export default function Dialog({isOpen, closeDialog, children}){
  const ref = useRef(null)

  useEffect(() => {
    if (!isOpen) return

    const dialog = ref.current
    dialog.showModal()

    return () => { dialog.close() }
  })

  return <dialog ref={ref}>
    <div className={styles.children}>{children}</div>
    <button onClick={closeDialog}>X</button>
  </dialog>
}