# 🥔 Proyecto картошка

¡Bienvenido al proyecto más delicioso! Esta es una aplicación web premium construida con **React + Vite** que celebra el arte de comer una papa.

## 🚀 Despliegue Rápido (Vercel)

La forma más recomendada de poner esta aplicación en línea es usar **Vercel**. Es gratis, rápido y profesional.

1.  **Sube tu código a GitHub**: Crea un repositorio nuevo y sube esta carpeta.
2.  **Entra en [Vercel.com](https://vercel.com)**: Inicia sesión con tu cuenta de GitHub.
3.  **Importar Proyecto**: Dale al botón "Add New" -> "Project" y selecciona tu repositorio `kartoshka`.
4.  **Desplegar**: Vercel detectará que es un proyecto de Vite. Solo dale a **"Deploy"**.

¡En menos de 1 minuto tendrás un enlace público (ej: `kartoshka.vercel.app`) para compartir!

## 🐳 Despliegue Alternativo (Docker)

Si prefieres usar tu propio servidor con Docker:
1. Asegúrate de tener Docker instalado.
2. Ejecuta: `docker compose up -d --build`
3. Tu app estará en `http://localhost:8080`.

## 🛠️ Desarrollo Local

```bash
npm install
npm run dev
```

## ✨ Características
- **Logo Hiper-realista**: Generado por IA.
- **Animación Minimalista**: Efecto de "comer" mediante ciclos de frames.
- **Diseño Glassmorphism**: Estética moderna y responsive.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
