import {Layout} from "../../components/layout";
import {GetServerSidePropsContext} from 'next';
import PostDetails from "../../components/organisms/PostDetails/PostDetails";

interface IPostProps {
    details: any;
}

const Post = (props: IPostProps) => {
    const {details} = props;

    return (
        <Layout>
            <PostDetails post={details} />
        </Layout>
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const {id} = context.query;

    const response = await fetch(`http://localhost:3000/api/post-details?id=${id}`);

    const details = await response.json();

    return {
        props: {
            details
        }
    };
}

export default Post;
