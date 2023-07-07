import styles from "./Hello.module.css";

export default function Hello() {
    return (
        <div>
            <p>Hello</p>
            <div className={styles.box}>hello</div>
        </div>
    )
}