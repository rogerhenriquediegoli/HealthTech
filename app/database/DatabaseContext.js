import React from 'react';
import { SQLiteProvider } from 'expo-sqlite';

/**
 * Initialize the database if it doesn't exist.
 */
const initializeDatabase = async (db) => {
  await db.execAsync(`
     CREATE TABLE IF NOT EXISTS usuarios (
            idUsuario INTEGER PRIMARY KEY AUTOINCREMENT,
            nomeCompleto TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            senha TEXT NOT NULL,
            cep TEXT,
            endereco TEXT,
            numero TEXT,
            complemento TEXT,
            telefone TEXT
        );

        CREATE TABLE IF NOT EXISTS planos_saude (
            idPlano INTEGER PRIMARY KEY AUTOINCREMENT,
            nomePlano TEXT NOT NULL UNIQUE
        );
        
        CREATE TABLE IF NOT EXISTS usuarios_planos (
            idUsuario INTEGER,
            idPlano INTEGER,
            PRIMARY KEY (idUsuario, idPlano),
            FOREIGN KEY (idUsuario) REFERENCES usuarios(idUsuario),
            FOREIGN KEY (idPlano) REFERENCES planos_saude(idPlano)
            );
  `);
};

/**
 * DatabaseProvider wraps the app and provides the SQLite context.
 */
export const DatabaseContext = ({ children }) => {
  return (
    <SQLiteProvider databaseName="mycrud.db" onInit={initializeDatabase}>
      {children}
    </SQLiteProvider>
  );
};