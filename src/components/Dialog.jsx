import { useRef, useEffect, useState } from "react"
import styles from "./Dialog.module.css"

// eslint-disable-next-line react/prop-types
export default function Dialog({isOpen, closeDialog, children}){
  const [toClose, setToClose] = useState(false)
  const ref = useRef(null)

  const handleClose = () => {
    setToClose(true)
    setTimeout(() => closeDialog(), 250)
  }

  useEffect(() => {
    if (!isOpen) return setToClose(false)

    const dialog = ref.current
    dialog.showModal()

    return () => dialog.close()
  }, [isOpen])

  return (isOpen) && <dialog
    ref={ref}
    className={(!toClose) ? styles.dialog : styles.toClose}
    >
    <div className={styles.children}>{children}</div>
    <button onClick={handleClose}>X</button>
  </dialog>
}