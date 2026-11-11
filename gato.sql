DROP DATABASE IF EXISTS gatos;
CREATE DATABASE IF NOT EXISTS gatos;
USE gatos;

CREATE TABLE IF NOT EXISTS gato_pelaje (
 pelaje_id INT AUTO_INCREMENT PRIMARY KEY,
 nombre VARCHAR(80) NOT NULL
);

CREATE TABLE IF NOT EXISTS gato_razas (
 raza_id INT AUTO_INCREMENT PRIMARY KEY,
 nombre VARCHAR(120) NOT NULL,
 descripcion TEXT,
 pelaje_id INT NOT NULL,
 CONSTRAINT fk_gato_pelaje
 FOREIGN KEY (pelaje_id)
 REFERENCES gato_pelaje(pelaje_id)
);

INSERT INTO gato_pelaje (nombre) VALUES
("Corto"),
("Largo"),
("Medio"),
("Sin pelaje");

INSERT INTO gato_razas (nombre, descripcion, pelaje_id) VALUES
("American ShortHair", "Gato americano con pelaje corto", 1),
("American BobTail", "Gato americano esponjoso", 2),
("American Curl", "Gato americano ???", 3),
("American WireHair", "Gato americano ???", 1),
("Balinese", "Gato blanco", 2),
("Birman", "Gato blanco", 2),
("Bambino", "Gato sin pelaje", 4);

SELECT
 p.raza_id,
 p.nombre,
 p.descripcion,
 c.nombre AS pelaje
FROM gato_razas AS p
INNER JOIN gato_pelaje AS c
 ON p.pelaje_id = c.pelaje_id
ORDER BY p.nombre;