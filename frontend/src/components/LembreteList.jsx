import React from "react";
import { deleteLembrete } from "../api";

const LembreteList = ({ lembretes, onDelete }) => {
    const handleDelete = async (id) => {
        await deleteLembrete(id);
        onDelete(id);
    };

    return (
        <ul>
            {lembretes.map((lembrete) => (
                <li key={lembrete.id}>
                    <strong>{lembrete.nome}</strong> - {new Date(lembrete.data).toLocaleDateString()}
                    <button onClick={() => handleDelete(lembrete.id)}> Excluir</button>
                </li>
            ))}
        </ul>
    );
};

export default LembreteList;
