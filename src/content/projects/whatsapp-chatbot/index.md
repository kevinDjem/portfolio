---
title: "WhatsApp Chatbot - Cotizador de Arquitectura"
description: "Servidor backend que implementa un chatbot de WhatsApp vía Twilio para cotizaciones automatizadas de proyectos de construcción. Los usuarios interactúan a través de WhatsApp para seleccionar tipo de trabajo (habitación, baño, fachada) y recibir estimados de precio en MXN según los m² ingresados."
image: "./cover.webp"
technologies: ["Node.js", "TypeScript", "Express.js", "Twilio", "dotenv", "Morgan"]
featured: false
date: 2025-10-08
type: "backend"
# githubUrl: "https://github.com/KevinDjem/shopping-cart"
# demoUrl: "https://cart-shopping-app.netlify.app/"
draft: true
---

## Acerca de este proyecto

DevFlow comenzó como una herramienta interna para resolver un problema real: los ingenieros perdían demasiado tiempo cambiando de contexto entre GitHub, Jira, Slack y paneles de CI. La idea era simple — una sola pantalla, un solo refresh, panorama completo.

## Arquitectura

El backend es un servicio Node.js con una API REST + WebSocket. PostgreSQL gestiona la persistencia de métricas y snapshots. Redis actúa como intermediario para el pub/sub de eventos en tiempo real entre el receptor de webhooks de GitHub y los clientes del dashboard.

```bash
# Iniciar el stack completo con Docker Compose
docker compose up --build

# Ejecutar migraciones de base de datos
npm run db:migrate

# Iniciar servidor de desarrollo
npm run dev
```

El frontend es una SPA en React con TailwindCSS. El polling de datos utiliza React Query con una configuración agresiva de `stale-time` — la mayoría de las vistas se actualizan cada 30s, y el feed de CI cada 5s mediante fallback a WebSocket.

## Desafíos

La parte más difícil fue el rate-limiting. La API de GitHub es generosa, pero no ilimitada. Implementamos una caché de dos capas: una LRU en memoria para lecturas en menos de un segundo, y un almacenamiento de snapshots en PostgreSQL para datos con más de 5 minutos de antigüedad. Esto redujo las llamadas a la API en un ~87% sin que el usuario percibiera datos desactualizados.

## Lo que aprendí

Construir esto consolidó mi comprensión del diseño de sistemas en tiempo real. Específicamente: cuándo usar push vs polling, cómo gestionar fallos parciales en pipelines de agregación, y el costo no tan evidente de mantener conexiones WebSocket activas a escala.
