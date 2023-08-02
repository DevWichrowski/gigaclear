import {Layout} from "../components/layout";
import List from "../components/organisms/List/List";
import Post from "../components/organisms/Post/Post";

import TextHeader from "@/atoms/TextHeader/TextHeader";

import styles from "./index.module.sass"


interface IHomeProps {
    posts: IHomeProps;
}

const Home = (props: IHomeProps) => {
    const {posts} = props;

    return (
        <Layout>
            <div className={styles.separator}>
                <TextHeader text="Check our latest Posts" />
            </div>
            <List
                data={posts}
                renderItem={(item: any) => <Post />}
            />
        </Layout>
    )
}

export async function getServerSideProps() {
    const response = await fetch('http://localhost:3000/api/posts');
    const posts = await response.json();

    return {
        props: {
            posts
        }
    };
}

export default Home;
