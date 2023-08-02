import {Layout} from "../../components/layout";
import {GetServerSidePropsContext} from 'next';

interface IPostProps {
    details: any;
}

const Post = (props: IPostProps) => {
    const {details} = props;

    return (
        <Layout>
            <h1>{details.title}</h1>
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
