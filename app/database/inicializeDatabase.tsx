import { type SQLiteDatabase } from "expo-sqlite";

export async function initializeDatabase(database: SQLiteDatabase) {
    // Create tables
    await database.execAsync(
        `CREATE TABLE usuarios (
            idUsuario INT AUTO_INCREMENT PRIMARY KEY,
            nomeCompleto VARCHAR(100) NOT NULL,
            email VARCHAR(100) NOT NULL UNIQUE,
            senha VARCHAR(100) NOT NULL,
            cep VARCHAR(20),
            endereco VARCHAR(150),
            numero VARCHAR(10),
            complemento VARCHAR(50),
            telefone VARCHAR(20)
        );
        `
    );

    await database.execAsync(
        `CREATE TABLE IF NOT EXISTS planos_saude (
            idPlano INTEGER PRIMARY KEY AUTOINCREMENT,
            nomePlano TEXT NOT NULL
        );`
    );

    await database.execAsync(
        `CREATE TABLE IF NOT EXISTS usuarios_planos (
            idUsuario INTEGER,
            idPlano INTEGER,
            PRIMARY KEY (idUsuario, idPlano),
            FOREIGN KEY (idUsuario) REFERENCES usuarios(idUsuario),
            FOREIGN KEY (idPlano) REFERENCES planos_saude(idPlano)
        );`
    );

    // Insert planos de saúde if not exists
    const plans = ['Sulamerica', 'Unimed', 'Bradesco', 'Amil', 'Biosaúde', 'Biovida', 'Outros'];

    for (const plan of plans) {
        await database.execAsync(
            `INSERT INTO planos_saude ('${plan}')
            SELECT * FROM (SELECT '${plan}') AS tmp
            WHERE NOT EXISTS (
                SELECT nomePlano FROM planos_saude WHERE nomePlano = '${plan}'
            ) LIMIT 1;
            `
        );
    }
}

