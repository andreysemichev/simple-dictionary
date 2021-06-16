import Word from "components/Word";

import styles from "./styles.module.scss";

interface IndexProps {
}

const Index: React.FC<IndexProps> = ({  }) => {
    return (<>
        <div className={styles.item}>
            <Word
                isStarredWords={true}
                isStarred={true}
                word="Lorem"
                part="Lorem2"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nam. Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
        </div>
        <div className={styles.item}>
            <Word
                isStarredWords={true}
                isStarred={true}
                word="Lorem"
                part="Lorem2"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nam. Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
        </div>
        <div className={styles.item}>
            <Word
                isStarredWords={true}
                isStarred={false}
                word="Lorem"
                part="Lorem2"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nam. Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
        </div>
    </>);
}

export default Index;