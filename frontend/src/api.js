const API_URL = "http://localhost:5290/api/lembretes";

export async function fetchLembretes() {
    const response = await fetch(API_URL);
    return response.json();
}

export async function addLembrete(lembrete) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lembrete),
    });
    return response.json();
}

export async function fetchGroupedLembretes() {
    const response = await fetch("http://localhost:5290/api/lembretes/grouped");
    return response.json();
}


export async function deleteLembrete(id) {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
}
