import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { PageProps } from "@/types";
import { Card, Container, IconButton } from "@mui/material";
import { AddTask } from "@mui/icons-material";
import Modal from "@/Components/Modal";
import { useState } from "react";

export default function Dashboard({ auth }: PageProps) {
    const [showAddRecipe, setShowAddRecipe] = useState<boolean>(false);
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        effort: '0',
        byUserId: auth.user.id,
    });

    const submitRecipe = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        post("/recipe");
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <Modal show={showAddRecipe} onClose={() => setShowAddRecipe(false)}>
                Rezept hinzufügen
                <form onSubmit={submitRecipe}>
                    <input
                        type="text"
                        value={data.title}
                        onChange={(e) => setData("title", e.target.value)}
                    />
                    <select onChange={(e) => setData("effort", e.target.value)} value={data.effort}>
                        <option value="0">Blitzrezept</option>
                        <option value="1">eine Sanduhr</option>
                        <option value="2">zwei Sanduhren</option>
                        <option value="3">drei Sanduhren</option>
                    </select>
                    <button type="submit" disabled={processing}>
                        Rezept speichern
                    </button>
                </form>
            </Modal>

            <Container>
                <IconButton onClick={() => setShowAddRecipe(true)}>
                    <AddTask />
                </IconButton>
                <Card>you are logged in!</Card>
            </Container>
        </AuthenticatedLayout>
    );
}
