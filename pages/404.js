import Link from "next/link";
import Layout from "../components/layout";

const Custom404 = () => (
    <Layout>
        <div className="text-center">
            <h1>404</h1>
            <p>
                This pages not exists. Please return to
                <Link href="/">
                    <a>Home</a>
                </Link>
            </p>
        </div>
    </Layout>
)

export default Custom404;