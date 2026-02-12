# 📝 GUÍA PARA EDITAR QUINCONNECTION

## ¿Cómo editar el contenido?

Todo el texto del sitio web está en **UN SOLO ARCHIVO** fácil de editar:

📄 **`src/content/siteContent.ts`**

---

## 🎯 Edición Rápida

### 1. Abre el archivo
```
src/content/siteContent.ts
```

### 2. Encuentra lo que quieres cambiar

El archivo está organizado por secciones:

| Sección | Para editar |
|---------|-------------|
| `siteConfig` | Nombre, descripción, enlaces |
| `navigation` | Menú de navegación |
| `heroSection` | Título principal, botones |
| `problemSection` | Texto del problema |
| `solutionSection` | Lo que hacemos |
| `servicesSection` | Los 6 servicios |
| `processSection` | Pasos del proceso |
| `benefitsSection` | Beneficios |
| `solutionsSection` | Soluciones por empresa |
| `aboutSection` | Sobre nosotros |
| `ctaSection` | Llamado a la acción final |
| `contactSection` | Información de contacto |
| `footer` | Pie de página |

### 3. Solo cambia el texto entre comillas

**ANTES:**
```typescript
title: "Automatización + IA para empresas",
```

**DESPUÉS:**
```typescript
title: "Tu nuevo título aquí",
```

---

## 🎨 Cambiar Colores

Los colores están en:
- 📄 `src/index.css` - Variables CSS
- 📄 `tailwind.config.js` - Configuración de Tailwind

Color principal actual: **Verde Esmeralda** `#10b981`

Para cambiarlo, busca `#10b981` y reemplázalo con tu color.

---

## 🖼️ Cambiar Imágenes

Sube tus imágenes a:
```
public/images/
```

Y actualiza la ruta en `siteContent.ts`:
```typescript
logo: "/images/tu-nueva-imagen.png",
```

---

## 🔗 Cambiar Enlaces

### Calendly/Cal.com
Busca en `siteContent.ts`:
```typescript
calendly: "https://cal.com/sara-quinchia-x4tpcj",
```

Cambia por tu enlace.

### Instagram
```typescript
instagram: "https://www.instagram.com/quinconnection.co",
```

---

## 🚀 Para Publicar Cambios

### Opción 1: Vercel (Recomendado - Gratis)
1. Sube el proyecto a GitHub
2. Conecta con Vercel
3. Los cambios se publican automáticamente

### Opción 2: Hostinger
1. Ejecuta: `npm run build`
2. Sube la carpeta `dist/` a tu hosting

---

## ❓ ¿Necesitas ayuda?

El sitio está construido con:
- ⚛️ React + TypeScript
- 🎨 Tailwind CSS
- 🧩 shadcn/ui components

Cualquier desarrollador frontend puede ayudarte a hacer cambios avanzados.

---

## 📁 Estructura del Proyecto

```
quinconnection/
├── src/
│   ├── content/
│   │   └── siteContent.ts    ← EDITAS AQUÍ
│   ├── sections/              ← Secciones del sitio
│   ├── components/            ← Componentes (Header, Footer)
│   └── App.tsx               ← Página principal
├── public/
│   └── images/               ← Tus imágenes
├── index.html                ← Configuración SEO
└── package.json              ← Dependencias
```

---

## ✅ Checklist de Edición

- [ ] Cambiar título en Hero
- [ ] Actualizar descripción
- [ ] Revisar servicios
- [ ] Cambiar enlace de Calendly
- [ ] Actualizar email de contacto
- [ ] Cambiar Instagram
- [ ] Subir logo personalizado
- [ ] Revisar texto del footer

---

**¡Listo! Con esta guía puedes editar todo el sitio sin saber código.** 🎉
