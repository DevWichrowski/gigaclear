import {Layout} from "../components/layout";

interface IHomeProps {
    posts: IHomeProps;
}

const Home = (props: IHomeProps) => {
    const {posts} = props;

    return (
        <Layout>
            content
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
