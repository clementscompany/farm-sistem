import sqlite3 from "sqlite3";
export const DB = new sqlite3.Database("farmacia.db");

const CreateTable = () => {
  const usuarios = `
    CREATE TABLE IF NOT EXISTS usuarios (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome VARCHAR(100) NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      senha VARCHAR(255) NULL,
      telefone VARCHAR(15),
      cargo TEXT CHECK(cargo IN ('Administrador', 'Gestor', 'Farmacêutico', 'Atendente')) NOT NULL,
      data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
  DB.run(usuarios);

  const clientes = `
    CREATE TABLE IF NOT EXISTS clientes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome VARCHAR(100) NOT NULL,
      telefone VARCHAR(15),
      email VARCHAR(100) UNIQUE,
      endereco TEXT,
      data_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
  DB.run(clientes);

  const fornecedores = `
    CREATE TABLE IF NOT EXISTS fornecedores (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome VARCHAR(100) NOT NULL,
      contato VARCHAR(15),
      email VARCHAR(100) UNIQUE,
      endereco TEXT,
      data_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
  DB.run(fornecedores);

  const medicamentos = `
    CREATE TABLE IF NOT EXISTS medicamentos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome VARCHAR(100) NOT NULL,
      descricao TEXT,
      categoria TEXT CHECK(categoria IN ('Analgésico', 'Antibiótico', 'Antialérgico', 'Anti-inflamatório', 'Outros')) NOT NULL,
      preco DECIMAL(10,2) NOT NULL,
      quantidade_estoque INTEGER NOT NULL DEFAULT 0,
      fornecedor_id INTEGER NOT NULL,
      data_validade DATE NOT NULL,
      FOREIGN KEY (fornecedor_id) REFERENCES fornecedores(id)
    );
  `;
  DB.run(medicamentos);

  const vendas = `
    CREATE TABLE IF NOT EXISTS vendas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      cliente_id INTEGER NOT NULL,
      usuario_id INTEGER NOT NULL,
      data_venda TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      total DECIMAL(10,2) NOT NULL,
      FOREIGN KEY (cliente_id) REFERENCES clientes(id),
      FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
    );
  `;
  DB.run(vendas);

  const itens_vendas = `
    CREATE TABLE IF NOT EXISTS itens_vendas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      venda_id INTEGER NOT NULL,
      medicamento_id INTEGER NOT NULL,
      quantidade INTEGER NOT NULL,
      preco_unitario DECIMAL(10,2) NOT NULL,
      subtotal DECIMAL(10,2) NOT NULL,
      FOREIGN KEY (venda_id) REFERENCES vendas(id),
      FOREIGN KEY (medicamento_id) REFERENCES medicamentos(id)
    );
  `;
  DB.run(itens_vendas);

  const entrada_estoque = `
    CREATE TABLE IF NOT EXISTS entrada_estoque (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      medicamento_id INTEGER NOT NULL,
      fornecedor_id INTEGER NOT NULL,
      quantidade INTEGER NOT NULL,
      preco_compra DECIMAL(10,2) NOT NULL,
      data_entrada TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (medicamento_id) REFERENCES medicamentos(id),
      FOREIGN KEY (fornecedor_id) REFERENCES fornecedores(id)
    );
  `;
  DB.run(entrada_estoque);

  const pagamentos = `
    CREATE TABLE IF NOT EXISTS pagamentos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      venda_id INTEGER NOT NULL,
      metodo_pagamento TEXT CHECK(metodo_pagamento IN ('Dinheiro', 'Cartão de Crédito', 'Cartão de Débito', 'PIX', 'Transferência')) NOT NULL,
      valor_pago DECIMAL(10,2) NOT NULL,
      data_pagamento TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (venda_id) REFERENCES vendas(id)
    );
  `;
  DB.run(pagamentos);

  const estoque = `
    CREATE TABLE IF NOT EXISTS estoque (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      medicamento_id INTEGER NOT NULL,
      quantidade INTEGER NOT NULL DEFAULT 0,
      data_atualizacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (medicamento_id) REFERENCES medicamentos(id)
    );
  `;
  DB.run(estoque);
};

CreateTable();


