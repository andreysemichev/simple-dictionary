import cn from "classnames";

import Search from "components/Search";
import { ChangeEvent, useState } from "react";

import styles from "./styles.module.scss"

const Index: React.FC = () => {
    const [searchValue, setSearchValue] = useState<string>("");

    const handleUpdateSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    }

    return (<>
        <main className={styles.main}>
            <div className={cn(styles.mainInner, styles.container)}>
                <Search searchValue={searchValue} handleUpdateSearchValue={handleUpdateSearchValue} />
            </div>
        </main>
    </>);
}

export default Index;