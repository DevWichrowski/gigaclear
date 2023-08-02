import {Layout} from "../components/layout";
import List from "../components/organisms/List/List";
import Post from "../components/organisms/Post/Post";

interface IHomeProps {
    posts: IHomeProps;
}

const Home = (props: IHomeProps) => {
    const {posts} = props;

    return (
        <Layout>
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
