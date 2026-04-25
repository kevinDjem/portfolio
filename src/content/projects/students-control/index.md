---
title: "Sistema CRUD de Estudiantes"
description: "Aplicación web de gestión de estudiantes desarrollada con Blazor y .NET 8, que implementa operaciones CRUD con Entity Framework Core y SQL Server, ofreciendo una interfaz moderna y funcional para la administración de datos."
image: "./cover.webp"
technologies: [".Net", "SQLServer", "Entity Framework", "Blazor"]
githubUrl: "https://github.com/KevinDjem/PruebaCRUD"
featured: false
type: frontend
date: 2025-06-20
---

## Acerca de este proyecto

Este proyecto consiste en una aplicación web desarrollada con **Blazor (.NET 8)** para la gestión de estudiantes, enfocada en implementar operaciones **CRUD** de manera eficiente. La solución utiliza **Entity Framework Core** junto con **SQL Server** para el manejo y persistencia de datos.

La aplicación permite crear, visualizar, editar y eliminar registros de estudiantes, así como consultar información detallada de cada uno. Incluye **validaciones** en formularios y una interfaz moderna basada en **componentes** de **Syncfusion Blazor**, lo que mejora la experiencia del usuario.

Además, la estructura del proyecto está organizada en componentes y páginas bien definidas, facilitando el mantenimiento, la escalabilidad y la separación de responsabilidades dentro de la aplicación.

---

## Características

- Listado de estudiantes con paginación y acciones rápidas (editar, ver detalles, eliminar).
- Formulario para registrar nuevos estudiantes con validaciones.
- Edición y eliminación de registros existentes.
- Visualización de detalles completos de cada estudiante.
- Campos gestionados: Nombres, Apellidos, Fecha de Nacimiento, Dirección, Sexo, CURP, Teléfono, Email, Carrera, Modalidad, Descripción, Mascotas, Horario de Comida, entre otros.
- Interfaz moderna usando componentes de Syncfusion Blazor.

## Tecnologías utilizadas

- [Blazor Server](https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor)
- [.NET8](https://dotnet.microsoft.com/es-es/download/dotnet/8.0)
- [Entity Framework Core](https://learn.microsoft.com/es-es/ef/core/)
- [SQL Server](https://www.microsoft.com/es-mx/sql-server/sql-server-downloads)
- [Syncfusion Blazor Components](https://www.syncfusion.com/blazor-components)

## Estructura del proyecto
- **Pages/Home.razor**: Listado principal de estudiantes.
- **Pages/Create.razor**: Alta de nuevos estudiantes.
- **Pages/Edit.razor**: Edición de estudiantes.
- **Pages/Details.razor**: Detalles de un estudiante.
- **Pages/Delete.razor**: Eliminación de estudiantes.
- **Models/Student.cs**: Modelo de datos del estudiante.
- **Data/MyAppDbContext.cs**: Contexto de Entity Framework.

## Capturas de pantalla

![Inicio](https://raw.githubusercontent.com/KevinDjem/PruebaCRUD/main/images/inicio.png)

---

![Editar](https://raw.githubusercontent.com/KevinDjem/PruebaCRUD/main/images/editar.png)

---

![Eliminar](https://raw.githubusercontent.com/KevinDjem/PruebaCRUD/main/images/eliminar.png)

---

![Detaller](https://raw.githubusercontent.com/KevinDjem/PruebaCRUD/main/images/detalles.png)
