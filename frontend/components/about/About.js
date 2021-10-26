import styles from "./About.module.css"

export default function About({ about }) {
    return (
        <div className="about">

            <tr className={styles.about}>
                <td className={styles.aboutChar}>
                    About
                </td>
                <td className={styles.catchcopy}>
                    {about.catch_copy}
                </td>
            </tr>
        </div>
    )
}   