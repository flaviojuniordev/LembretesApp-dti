import React, { useEffect, useState } from "react";
import AddLembrete from "./components/AddLembrete";
import { fetchGroupedLembretes } from "./api";
import "./styles/styles.scss";

const App = () => {
  const [lembretes, setLembretes] = useState({}); // Agora é um objeto para os grupos de datas

  useEffect(() => {
    const loadLembretes = async () => {
      try {
        const grouped = await fetchGroupedLembretes(); // Busca os lembretes agrupados da API
        setLembretes(grouped);
      } catch (error) {
        console.error("Erro ao buscar lembretes agrupados:", error);
      }
    };
    loadLembretes();
  }, []);

  const handleAdd = (lembrete) => {
    const { data } = lembrete; // Data do novo lembrete
    const dateKey = new Date(data).toISOString().split("T")[0]; // Formata para o formato YYYY-MM-DD

    setLembretes((prev) => ({
      ...prev,
      [dateKey]: prev[dateKey] ? [...prev[dateKey], lembrete] : [lembrete],
    }));
  };

  const handleDelete = (id) => {
    setLembretes((prev) => {
      const updatedGroups = {};
      Object.keys(prev).forEach((dateKey) => {
        const filteredLembretes = prev[dateKey].filter((lembrete) => lembrete.id !== id);
        if (filteredLembretes.length > 0) {
          updatedGroups[dateKey] = filteredLembretes;
        }
      });
      return updatedGroups;
    });
  };

  return (
    <div className="container">

      <header>
        <h1>📋 Gerenciador de Lembretes</h1>
      </header>

      <main>
        <div className="add-lembrete">
          <AddLembrete onAdd={handleAdd} />
        </div>
        {Object.keys(lembretes).length > 0 ? (
          Object.keys(lembretes).map((date) => (
            <section className="lembrete-group" key={date}>
              {/* Formatação para o padrão dd/mm/yyyy */}
              <h2>{new Date(date).toLocaleDateString("pt-BR")}</h2>
              {lembretes[date].map((lembrete) => (
                <div className="lembrete-card" key={lembrete.id}>
                  <span>{lembrete.nome}</span>
                  <button onClick={() => handleDelete(lembrete.id)}>Excluir</button>
                </div>
              ))}
            </section>
          ))
        ) : (
          <p>Nenhum lembrete encontrado.</p>
        )}
      </main>
      <footer>
        <p>© 2025 Gerenciador de Lembretes</p>
      </footer>
    </div>
  );
};

export default App;
