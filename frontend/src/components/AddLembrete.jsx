import React, { useState } from "react";
import { addLembrete } from "../api";

const AddLembrete = ({ onAdd }) => {
    const [nome, setNome] = useState("");
    const [data, setData] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const today = new Date();
        const selectedDate = new Date(data);

        if (selectedDate < today.setHours(0, 0, 0, 0)) {
            setError("A data não pode estar no passado.");
            return;
        }

        setError("");
        const newLembrete = { nome, data };
        const createdLembrete = await addLembrete(newLembrete);
        onAdd(createdLembrete);
        setNome("");
        setData("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="nome">Nome do Lembrete:</label>
            <input
                type="text"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
            />

            <label htmlFor="data">Data:</label>
            <input
                type="date"
                id="data"
                value={data}
                onChange={(e) => setData(e.target.value)}
                required
            />

            {error && <p style={{ color: "red" }}>{error}</p>} { }

            <button type="submit">Adicionar</button>
        </form>
    );
};

export default AddLembrete;
