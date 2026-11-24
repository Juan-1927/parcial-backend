BEGIN;

-- Tabla de las materias del sexto semestre
CREATE TABLE IF NOT EXISTS materias (
    id BIGINT PRIMARY KEY,
    nombre TEXT NOT NULL,
    nrc TEXT NOT NULL,
    docente TEXT NOT NULL
);

-- Si una materia ya existe, no se vuelve a insertar
INSERT INTO materias (id, nombre, nrc, docente)
VALUES
    (1, 'Ecuaciones Diferenciales', '60-90047', 'MARY LUCIA GALINDO GALINDO'),
    (2, 'Desarrollo Basado en Plataformas', '60-80884', 'EDUARD ESTIVEN NUMPAQUE RODRIGUEZ'),
    (3, 'Sistemas Distribuidos', '60-90108', 'CLAUDIA ANDREA VASQUEZ HERNANDEZ'),
    (4, 'Elec CPC Calidad Educat y Eval', '60-92565', 'GLADYS CECILIA MARTINEZ SILVA'),
    (5, 'Elec CMD Construccion de Paz', '60-92545', 'CRISTIAN ANDRES ZAPATA VELEZ'),
    (6, 'Programación Web', '60-83681', 'LUIS GIOVANNI MORA JAIMES')
ON CONFLICT (id) DO NOTHING;

-- Tabla de los horarios de clase
CREATE TABLE IF NOT EXISTS horarios (
    id BIGINT PRIMARY KEY,
    materia TEXT NOT NULL,
    dia TEXT NOT NULL,
    inicio TEXT NOT NULL,
    fin TEXT NOT NULL
);

INSERT INTO horarios (id, materia, dia, inicio, fin)
VALUES
    (1, 'Ecuaciones Diferenciales', 'Lunes', '4:45 PM', '6:15 PM'),
    (2, 'Desarrollo Basado en Plataformas', 'Lunes', '8:30 PM', '10:00 PM'),
    (3, 'Desarrollo Basado en Plataformas', 'Martes', '6:15 PM', '7:45 PM'),
    (4, 'Programación Web', 'Miércoles', '8:30 PM', '10:00 PM'),
    (5, 'Sistemas Distribuidos', 'Jueves', '6:15 PM', '7:45 PM'),
    (6, 'Programación Web', 'Jueves', '8:30 PM', '10:00 PM'),
    (7, 'Sistemas Distribuidos', 'Viernes', '8:30 PM', '10:00 PM'),
    (8, 'Elec CPC Calidad Educat y Eval', 'Virtual asincrónica', '-', '-'),
    (9, 'Elec CMD Construccion de Paz', 'Virtual asincrónica', '-', '-')
ON CONFLICT (id) DO NOTHING;

COMMIT;
