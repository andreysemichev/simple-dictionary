import cn from "classnames";
import { ChangeEvent, useState } from "react";

import Search from "components/Search";
import WordList from "components/WordList";

import styles from "./styles.module.scss"

const Index: React.FC = () => {
    const [searchValue, setSearchValue] = useState<string>("");

    const handleUpdateSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    }

    return (<>
        <main className={styles.main}>
            <div className={cn(styles.mainInner, styles.container)}>
                <div>
                    <Search searchValue={searchValue} handleUpdateSearchValue={handleUpdateSearchValue} />
                </div>
                <div>
                    <WordList />
                </div>
            </div>
        </main>
    </>);
}

export default Index;