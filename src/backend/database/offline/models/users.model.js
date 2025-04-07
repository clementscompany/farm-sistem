import { DB } from "../db.js";

class User {
  index() {
    return new Promise((resolve, reject) => {
      DB.all("SELECT * FROM usuarios", (err, data) => {
        if (err) {
          console.log("Erro na configuração do banco de dados: " + err);
          return reject(false);
        }
        if (data.length === 0) {
          const stmt = DB.prepare(
            "INSERT INTO usuarios (nome, email, senha, telefone, cargo) VALUES (?, ?, ?, ?, ?)"
          );
          stmt.run(
            "Admin",
            "admin@ajbcompany.com",
            "root",
            "931240190",
            "Administrador",
            (err) => {
              if (err) {
                console.log("Erro ao inserir usuário administrador: " + err);
                return reject(false);
              } else {
                console.log("Usuário administrador inserido com sucesso.");
                resolve(true);
              }
            }
          );
          stmt.finalize();
        } else {
          resolve(true);
        }
      });
    });
  }

  ///listar todos os dados 
  list() {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM usuarios";
      DB.all(query, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  listBy(id) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM usuarios WHERE usuarios.id = ?";
      DB.get(query, [id], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  //// atualizar a senha 
  updatePermission(id, permission) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE usuarios SET cargo = ? WHERE id = ?";
      DB.run(query, [permission, id], function (err) {
        if (err) {
          reject(err);
        } else {
          resolve({ message: "Permissão atualizada com sucesso.", changes: this.changes });
        }
      });
    });
  }
}

export default new User();