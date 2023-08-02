import {Layout} from "../components/layout";
import List from "../components/organisms/List/List";
import Post from "../components/organisms/Post/Post";

import TextHeader from "@/atoms/TextHeader/TextHeader";
import {IPost} from "../data/mocked-posts";

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
            <List
                data={posts}
                renderItem={(item) => <Post
                    id={item.id}
                    title={item.title}
                    description={item.shortDescription}
                    topic={item.topic}
                    author={item.author}
                    date={item.date}
                    image={item.thumbnailSrc}
                />}
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
