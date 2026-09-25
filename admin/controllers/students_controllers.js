export function home(req, res) {

  let students = [
    {
      "id": 1,
      "code": "20250001",
      "name": "Fabrizio Salazar",
      "career": "Ingeniería de Sistemas",
      "semester": 6
    },
    {
      "id": 2,
      "code": "20250002",
      "name": "María López",
      "career": "Ingeniería Industrial",
      "semester": 4
    },
    {
      "id": 3,
      "code": "20250003",
      "name": "Carlos Torres",
      "career": "Ingeniería Civil",
      "semester": 6
    },
    {
      "id": 4,
      "code": "20250004",
      "name": "Ana García",
      "career": "Arquitectura",
      "semester": 3
    },
    {
      "id": 5,
      "code": "20250005",
      "name": "Franco Bravo",
      "career": "Ingeniería de Sistemas",
      "semester": 6
    },
    {
      "id": 6,
      "code": "20250006",
      "name": "Sofía Ramírez",
      "career": "Ingeniería Industrial",
      "semester": 2
    },
    {
      "id": 7,
      "code": "20250007",
      "name": "Diego Castillo",
      "career": "Ingeniería Civil",
      "semester": 7
    },
    {
      "id": 8,
      "code": "20250008",
      "name": "Valeria Flores",
      "career": "Arquitectura",
      "semester": 4
    },
    {
      "id": 9,
      "code": "20250009",
      "name": "Angelo De Paz",
      "career": "Ingeniería de Sistemas",
      "semester": 6
    },
    {
      "id": 10,
      "code": "20250010",
      "name": "Camila Rojas",
      "career": "Ingeniería Ambiental",
      "semester": 3
    },
    {
      "id": 11,
      "code": "20250011",
      "name": "Miguel Herrera",
      "career": "Ingeniería Industrial",
      "semester": 6
    },
    {
      "id": 12,
      "code": "20250012",
      "name": "Daniela Castro",
      "career": "Ingeniería de Sistemas",
      "semester": 4
    },
    {
      "id": 13,
      "code": "20250013",
      "name": "Fernando Silva",
      "career": "Ingeniería Civil",
      "semester": 5
    },
    {
      "id": 14,
      "code": "20250014",
      "name": "Gabriela Mendoza",
      "career": "Arquitectura",
      "semester": 6
    },
    {
      "id": 15,
      "code": "20250015",
      "name": "Ricardo Salazar",
      "career": "Ingeniería de Sistemas",
      "semester": 7
    },
    {
      "id": 16,
      "code": "20250016",
      "name": "Lucía Navarro",
      "career": "Ingeniería Ambiental",
      "semester": 2
    },
    {
      "id": 17,
      "code": "20250017",
      "name": "Sebastián Paredes",
      "career": "Ingeniería Industrial",
      "semester": 8
    },
    {
      "id": 18,
      "code": "20250018",
      "name": "Paola Medina",
      "career": "Ingeniería Civil",
      "semester": 4
    },
    {
      "id": 19,
      "code": "20250019",
      "name": "Jorge Campos",
      "career": "Ingeniería de Sistemas",
      "semester": 6
    },
    {
      "id": 20,
      "code": "20250020",
      "name": "Natalia Vargas",
      "career": "Arquitectura",
      "semester": 5
    }
  ];

  return res.render('admin/students', {
    title: 'Administración de Alumnos',
    students: students,
    currentPage: 'students',
    description: 'Gestión de alumnos'
  });

}