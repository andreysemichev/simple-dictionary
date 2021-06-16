import { NavLink } from "react-router-dom";
import cn from "classnames";

import styles from "./styles.module.scss"

const Index: React.FC = () => {
    return (<>
        <header className={styles.header}>
            <div className={cn(styles.headerInner, styles.container)}>
                <NavLink className={styles.headerLink} to="/">Word Keeper</NavLink>
                <NavLink className={styles.headerLink} to="/starred">&#9733; Starred Words</NavLink>
            </div>
        </header>
    </>);
}

export default Index;