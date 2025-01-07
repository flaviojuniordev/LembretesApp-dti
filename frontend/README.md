# Gerenciador de Lembretes

Este projeto é uma aplicação web completa para gerenciar lembretes. Ele foi desenvolvido utilizando **.NET (backend)** e **React com Vite (frontend)**, com o banco de dados hospedado na **Azure SQL Database**.

---

## Estrutura do Projeto

A aplicação está dividida em duas partes principais:


Cada parte contém suas próprias dependências, configurações e instruções específicas, descritas abaixo.

---

## Premissas Assumidas

1. **Banco de Dados na Nuvem (Azure SQL Database)**:
   - O banco de dados está hospedado na **Azure** e foi configurado para aceitar conexões externas.

2. **Configuração da String de Conexão**:
   - O backend está configurado para se conectar ao banco utilizando as credenciais e o endereço fornecidos pela **Azure SQL Database**.

3. **Ambiente de Desenvolvimento Local**:
   - Presume-se que o projeto será executado localmente, com o backend e o frontend rodando em portas diferentes.

4. **Validação de Dados**:
   - O backend possui validações para impedir a criação de lembretes com datas no passado.
   - O frontend também realiza validações básicas para evitar submissões inválidas.

5. **Decisões de Projeto**:
   - **Frontend**: Escolhemos React com Vite para maior performance e simplicidade.
   - **Backend**: Utilizamos .NET devido à robustez e à familiaridade do ecossistema com APIs RESTful.
   - **CSS/SCSS**: Optamos por não utilizar bibliotecas de componentes visuais para priorizar estilos customizados com SCSS.
    - **Azure Sql**: Optei por utilizar um banco de dados em nuvem para aproveitar a escalabilidade, disponibilidade e facilidade de gerenciamento que o Azure SQL Database oferece.

---

## Requisitos do Sistema

Certifique-se de que as seguintes ferramentas estão instaladas:

- **Backend**:
  - [.NET SDK 7.0+](https://dotnet.microsoft.com/download/dotnet/7.0)

- **Frontend**:
  - [Node.js 18+](https://nodejs.org/en)
  - [npm](https://www.npmjs.com/)

---

## Como Executar

### **1. Backend**

1. Acesse a pasta do backend:
   ```bash
   cd backend

2. Instale as dependências:
    ```bash
    dotnet restore

3. Configure a string de conexão no arquivo `appsettings.json` com os dados da Azure SQL Database:    
    ```bash
    {
    "ConnectionStrings": {
        "DefaultConnection": "Server=tcp:lembretes.database.windows.net,1433;Database=lembretesdb;User ID=lembretesdb;Password=lembretes123@;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;"
    }

4. Execute o Servidor 
    ```bash
    dotnet run
    
O backend estará disponível em http://localhost:5290.

### **2. Frontend**

1. Acesse a pasta do frontend:
    ```bash
   cd frontend

2. Instale as dependências: 
    ```bash
    npm install

3. Execute o servidor de desenvolvimento:
    ```bash    
    npm run dev

O frontend estará disponível em http://localhost:5173.
Se necessário, configure a URL da API no arquivo `src/api.js`:
```bash 
const API_URL = "http://localhost:5290/api/lembretes";
```



## Configuração do Banco de Dados na Azure

### **1. Criação do banco:**
- O banco de dados foi criado na Azure SQL Database com as seguintes informações:

    - Server: `tcp:lembretes.database.windows.net,1433`
    - Database: `lembretesdb`
    - User ID: `lembretesdb`
    - Password: `lembretes123@`

### **2. Criação do banco:**
- Certifique-se de que o IP da máquina de desenvolvimento está permitido nas configurações de firewall da Azure.

- No portal Azure, acesse Firewall e redes virtuais do servidor SQL e adicione o IP público da sua máquina.

### **3. Migrações:**
- Certifique-se de que o banco está atualizado executando o seguinte comando na pasta do backend:
```bash
dotnet ef database update
```

---

## Endpoints da API

### GET /api/lembretes
Retorna todos os lembretes.

### POST /api/lembretes
Adiciona um novo lembrete.
Exemplo de corpo da requisição:
``` 
{
    "nome": "Estudar React",
    "data": "2025-02-15T00:00:00"
}

```
### DELETE /api/lembretes/{id}
Exclui um lembrete com o ID especificado.

## Validações Implementadas

### Frontend
- **Data no passado**:  O formulário bloqueia submissões com datas no passado e exibe uma mensagem de erro ao usuário.

### Backend 
- **Data no passado**: O backend verifica se a data está no passado e retorna um erro 400 Bad Request se a regra for violada.

## Decisões de Projeto

1. **Frontend com React**: 
- Optei por React com Vite devido à sua rapidez e simplicidade.
- Estilização personalizada usando SCSS para um design moderno.

2. **Backend com .NET**: 
- Escolhi .NET por sua robustez e capacidade de criar APIs RESTful facilmente.

3. **Banco de Dados na Nuvem**: 
- Utilizei o Azure SQL Database para garantir escalabilidade e facilidade de gerenciamento.

## Possíveis Melhorias Futuras
- Implementar funcionalidade para editar lembretes.
- Adicionar suporte para busca por nome ou data.
- Melhorar o layout visual com transições e animações.

---








# Gerenciador de Lembretes

Este projeto é uma aplicação web completa para gerenciar lembretes. Ele foi desenvolvido utilizando **.NET (backend)** e **React com Vite (frontend)**, com o banco de dados hospedado na **Azure SQL Database**.

---

## Estrutura do Projeto

A aplicação está dividida em duas partes principais:


Cada parte contém suas próprias dependências, configurações e instruções específicas, descritas abaixo.

---

## Premissas Assumidas

1. **Banco de Dados na Nuvem (Azure SQL Database)**:
   - O banco de dados está hospedado na **Azure** e foi configurado para aceitar conexões externas.

2. **Configuração da String de Conexão**:
   - O backend está configurado para se conectar ao banco utilizando as credenciais e o endereço fornecidos pela **Azure SQL Database**.

3. **Ambiente de Desenvolvimento Local**:
   - Presume-se que o projeto será executado localmente, com o backend e o frontend rodando em portas diferentes.

4. **Validação de Dados**:
   - O backend possui validações para impedir a criação de lembretes com datas no passado.
   - O frontend também realiza validações básicas para evitar submissões inválidas.

5. **Decisões de Projeto**:
   - **Frontend**: Escolhemos React com Vite para maior performance e simplicidade.
   - **Backend**: Utilizamos .NET devido à robustez e à familiaridade do ecossistema com APIs RESTful.
   - **CSS/SCSS**: Optamos por não utilizar bibliotecas de componentes visuais para priorizar estilos customizados com SCSS.
    - **Azure Sql**: Optei por utilizar um banco de dados em nuvem para aproveitar a escalabilidade, disponibilidade e facilidade de gerenciamento que o Azure SQL Database oferece.

---

## Requisitos do Sistema

Certifique-se de que as seguintes ferramentas estão instaladas:

- **Backend**:
  - [.NET SDK 7.0+](https://dotnet.microsoft.com/download/dotnet/7.0)

- **Frontend**:
  - [Node.js 18+](https://nodejs.org/en)
  - [npm](https://www.npmjs.com/)

---

## Como Executar

### **1. Backend**

1. Acesse a pasta do backend:
   ```bash
   cd backend

2. Instale as dependências:
    ```bash
    dotnet restore

3. Configure a string de conexão no arquivo `appsettings.json` com os dados da Azure SQL Database:    
    ```bash
    {
    "ConnectionStrings": {
        "DefaultConnection": "Server=tcp:lembretes.database.windows.net,1433;Database=lembretesdb;User ID=lembretesdb;Password=lembretes123@;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;"
    }

4. Execute o Servidor 
    ```bash
    dotnet run
    
O backend estará disponível em http://localhost:5290.

### **2. Frontend**

1. Acesse a pasta do frontend:
    ```bash
   cd frontend

2. Instale as dependências: 
    ```bash
    npm install

3. Execute o servidor de desenvolvimento:
    ```bash    
    npm run dev

O frontend estará disponível em http://localhost:5173.
Se necessário, configure a URL da API no arquivo `src/api.js`:
```bash 
const API_URL = "http://localhost:5290/api/lembretes";
```



## Configuração do Banco de Dados na Azure

### **1. Criação do banco:**
- O banco de dados foi criado na Azure SQL Database com as seguintes informações:

    - Server: `tcp:lembretes.database.windows.net,1433`
    - Database: `lembretesdb`
    - User ID: `lembretesdb`
    - Password: `lembretes123@`

### **2. Criação do banco:**
- Certifique-se de que o IP da máquina de desenvolvimento está permitido nas configurações de firewall da Azure.

- No portal Azure, acesse Firewall e redes virtuais do servidor SQL e adicione o IP público da sua máquina.

### **3. Migrações:**
- Certifique-se de que o banco está atualizado executando o seguinte comando na pasta do backend:
```bash
dotnet ef database update
```

---

## Endpoints da API

### GET /api/lembretes
Retorna todos os lembretes.

### POST /api/lembretes
Adiciona um novo lembrete.
Exemplo de corpo da requisição:
``` 
{
    "nome": "Estudar React",
    "data": "2025-02-15T00:00:00"
}

```
### DELETE /api/lembretes/{id}
Exclui um lembrete com o ID especificado.

## Validações Implementadas

### Frontend
- **Data no passado**:  O formulário bloqueia submissões com datas no passado e exibe uma mensagem de erro ao usuário.

### Backend 
- **Data no passado**: O backend verifica se a data está no passado e retorna um erro 400 Bad Request se a regra for violada.

## Decisões de Projeto

1. **Frontend com React**: 
- Optei por React com Vite devido à sua rapidez e simplicidade.
- Estilização personalizada usando SCSS para um design moderno.

2. **Backend com .NET**: 
- Escolhi .NET por sua robustez e capacidade de criar APIs RESTful facilmente.

3. **Banco de Dados na Nuvem**: 
- Utilizei o Azure SQL Database para garantir escalabilidade e facilidade de gerenciamento.

## Possíveis Melhorias Futuras
- Implementar funcionalidade para editar lembretes.
- Adicionar suporte para busca por nome ou data.
- Melhorar o layout visual com transições e animações.

---








# Gerenciador de Lembretes

Este projeto é uma aplicação web completa para gerenciar lembretes. Ele foi desenvolvido utilizando **.NET (backend)** e **React com Vite (frontend)**, com o banco de dados hospedado na **Azure SQL Database**.

---

## Estrutura do Projeto

A aplicação está dividida em duas partes principais:


Cada parte contém suas próprias dependências, configurações e instruções específicas, descritas abaixo.

---

## Premissas Assumidas

1. **Banco de Dados na Nuvem (Azure SQL Database)**:
   - O banco de dados está hospedado na **Azure** e foi configurado para aceitar conexões externas.

2. **Configuração da String de Conexão**:
   - O backend está configurado para se conectar ao banco utilizando as credenciais e o endereço fornecidos pela **Azure SQL Database**.

3. **Ambiente de Desenvolvimento Local**:
   - Presume-se que o projeto será executado localmente, com o backend e o frontend rodando em portas diferentes.

4. **Validação de Dados**:
   - O backend possui validações para impedir a criação de lembretes com datas no passado.
   - O frontend também realiza validações básicas para evitar submissões inválidas.

5. **Decisões de Projeto**:
   - **Frontend**: Escolhemos React com Vite para maior performance e simplicidade.
   - **Backend**: Utilizamos .NET devido à robustez e à familiaridade do ecossistema com APIs RESTful.
   - **CSS/SCSS**: Optamos por não utilizar bibliotecas de componentes visuais para priorizar estilos customizados com SCSS.
    - **Azure Sql**: Optei por utilizar um banco de dados em nuvem para aproveitar a escalabilidade, disponibilidade e facilidade de gerenciamento que o Azure SQL Database oferece.

---

## Requisitos do Sistema

Certifique-se de que as seguintes ferramentas estão instaladas:

- **Backend**:
  - [.NET SDK 7.0+](https://dotnet.microsoft.com/download/dotnet/7.0)

- **Frontend**:
  - [Node.js 18+](https://nodejs.org/en)
  - [npm](https://www.npmjs.com/)

---

## Como Executar

### **1. Backend**

1. Acesse a pasta do backend:
   ```bash
   cd backend

2. Instale as dependências:
    ```bash
    dotnet restore

3. Configure a string de conexão no arquivo `appsettings.json` com os dados da Azure SQL Database:    
    ```bash
    {
    "ConnectionStrings": {
        "DefaultConnection": "Server=tcp:lembretes.database.windows.net,1433;Database=lembretesdb;User ID=lembretesdb;Password=lembretes123@;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;"
    }

4. Execute o Servidor 
    ```bash
    dotnet run
    
O backend estará disponível em http://localhost:5290.

### **2. Frontend**

1. Acesse a pasta do frontend:
    ```bash
   cd frontend

2. Instale as dependências: 
    ```bash
    npm install

3. Execute o servidor de desenvolvimento:
    ```bash    
    npm run dev

O frontend estará disponível em http://localhost:5173.
Se necessário, configure a URL da API no arquivo `src/api.js`:
```bash 
const API_URL = "http://localhost:5290/api/lembretes";
```



## Configuração do Banco de Dados na Azure

### **1. Criação do banco:**
- O banco de dados foi criado na Azure SQL Database com as seguintes informações:

    - Server: `tcp:lembretes.database.windows.net,1433`
    - Database: `lembretesdb`
    - User ID: `lembretesdb`
    - Password: `lembretes123@`

### **2. Criação do banco:**
- Certifique-se de que o IP da máquina de desenvolvimento está permitido nas configurações de firewall da Azure.

- No portal Azure, acesse Firewall e redes virtuais do servidor SQL e adicione o IP público da sua máquina.

### **3. Migrações:**
- Certifique-se de que o banco está atualizado executando o seguinte comando na pasta do backend:
```bash
dotnet ef database update
```

---

## Endpoints da API

### GET /api/lembretes
Retorna todos os lembretes.

### POST /api/lembretes
Adiciona um novo lembrete.
Exemplo de corpo da requisição:
``` 
{
    "nome": "Estudar React",
    "data": "2025-02-15T00:00:00"
}

```
### DELETE /api/lembretes/{id}
Exclui um lembrete com o ID especificado.

## Validações Implementadas

### Frontend
- **Data no passado**:  O formulário bloqueia submissões com datas no passado e exibe uma mensagem de erro ao usuário.

### Backend 
- **Data no passado**: O backend verifica se a data está no passado e retorna um erro 400 Bad Request se a regra for violada.

## Decisões de Projeto

1. **Frontend com React**: 
- Optei por React com Vite devido à sua rapidez e simplicidade.
- Estilização personalizada usando SCSS para um design moderno.

2. **Backend com .NET**: 
- Escolhi .NET por sua robustez e capacidade de criar APIs RESTful facilmente.

3. **Banco de Dados na Nuvem**: 
- Utilizei o Azure SQL Database para garantir escalabilidade e facilidade de gerenciamento.

## Possíveis Melhorias Futuras
- Implementar funcionalidade para editar lembretes.
- Adicionar suporte para busca por nome ou data.
- Melhorar o layout visual com transições e animações.

---








