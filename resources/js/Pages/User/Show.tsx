import Layout from "./Layout";
import { Head } from "@inertiajs/react";

export default function Welcome({ user }: { user: any }) {
    console.log("USER", user);
    return (
        <Layout>
            <Head title="Welcome" />
            <h1>Welcome</h1>
            <p>Hello {user.name}, welcome to your second Inertia app!</p>
        </Layout>
    );
}
