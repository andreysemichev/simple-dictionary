import cn from "classnames";
import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetch } from "store/ducks/word-list/actionCreators";
import { selectWordList, selectWordListItems } from "store/ducks/word-list/selector";

import Search from "components/Search";
import Word from "components/Word";

import styles from "./styles.module.scss"

const Index: React.FC = () => {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState<string>("");
    const items = useSelector(selectWordListItems);

    const handleUpdateSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchValue(value);
        dispatch(fetch(value));
    }

    return (<>
        <main className={styles.main}>
            <div className={cn(styles.mainInner, styles.container)}>
                <div>
                    <Search searchValue={searchValue} handleUpdateSearchValue={handleUpdateSearchValue} />
                </div>
                <div>
                   { items && items.map((item, i) => <Word key={i}
                        isStarredWords={false}
                        isStarred={false}
                        word={item.word}
                        part={item.part}
                        description={item.description}
                   />) }
                </div>
            </div>
        </main>
    </>);
}

export default Index;