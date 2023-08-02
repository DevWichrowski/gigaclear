import {Layout} from "../components/layout";

import TextHeader from "@/atoms/TextHeader/TextHeader";
import {IPost} from "../data/mocked-posts";

import PostList from "../components/organisms/PostList/PostList";

import styles from "./index.module.sass"


interface IHomeProps {
    posts: IPost[];
}

const Home = (props: IHomeProps) => {
    const {posts} = props;

    return (
        <Layout>
            <div className={styles.separator}>
                <TextHeader text="Check our latest Posts" />
            </div>
            <PostList posts={posts} />
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
