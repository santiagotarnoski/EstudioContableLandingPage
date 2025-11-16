# Sitio Web - Estudio Contable Profesional

Sitio web moderno y profesional para un estudio contable, desarrollado con Next.js, React, TypeScript, Tailwind CSS y Framer Motion.

## 🚀 Características

- ✅ Diseño moderno, minimalista y corporativo
- ✅ Totalmente responsive (móvil, tablet, desktop)
- ✅ Animaciones suaves con Framer Motion
- ✅ Optimizado para SEO
- ✅ Formulario de contacto con validación
- ✅ Integración con WhatsApp
- ✅ TypeScript para type safety
- ✅ Componentes reutilizables

## 🛠️ Tecnologías

- **Framework:** Next.js 14 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Animaciones:** Framer Motion
- **Íconos:** Lucide React

## 📦 Instalación

1. **Clonar o descargar el proyecto**

2. **Instalar dependencias:**
```bash
npm install
```

3. **Ejecutar en desarrollo:**
```bash
npm run dev
```

4. **Abrir en el navegador:**
```
http://localhost:3000
```

## 📁 Estructura del Proyecto

```
/
├── app/                    # Páginas y rutas (App Router)
│   ├── page.tsx           # Página de inicio
│   ├── servicios/         # Página de servicios
│   ├── nosotros/          # Página sobre nosotros
│   ├── blog/              # Página de blog
│   ├── contacto/          # Página de contacto
│   ├── layout.tsx         # Layout principal
│   └── globals.css        # Estilos globales
├── components/            # Componentes reutilizables
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ServiceCard.tsx
│   └── TestimonialCard.tsx
├── constants/            # Datos y configuración
│   └── index.ts          # Configuración del sitio
└── public/               # Archivos estáticos
```

## ⚙️ Configuración

Todos los datos configurables están en `constants/index.ts`:

- **SITE_CONFIG:** Nombre, email, teléfono, WhatsApp, dirección
- **SERVICES:** Lista de servicios ofrecidos
- **SERVICE_PACKAGES:** Paquetes de servicios
- **TEAM:** Información del equipo
- **TESTIMONIALS:** Testimonios de clientes
- **FAQS:** Preguntas frecuentes
- **BLOG_POSTS:** Artículos del blog

### Personalizar WhatsApp

Edita el número en `constants/index.ts`:

```typescript
whatsapp: '5491112345678', // Sin + ni espacios
```

### Personalizar Colores

Los colores están definidos en `tailwind.config.ts`. Puedes modificar:
- `primary`: Color principal (teal/verde)
- `navy`: Color oscuro (azul marino)

## 🎨 Páginas Incluidas

### Home (/)
- Hero section con CTA
- Servicios principales
- Por qué elegirnos
- Proceso de trabajo
- Testimonios
- FAQ
- CTA final

### Servicios (/servicios)
- Detalle de cada servicio
- Beneficios y clientes ideales
- Paquetes de servicios comparativos

### Nosotros (/nosotros)
- Misión, visión y valores
- Equipo profesional
- Estadísticas
- Compromisos

### Blog (/blog)
- Lista de artículos
- Páginas individuales de posts
- Categorías y fechas

### Contacto (/contacto)
- Formulario de contacto con validación
- Información de contacto
- Link directo a WhatsApp

## 🚀 Build para Producción

```bash
npm run build
npm start
```

## 📝 Notas

- El formulario de contacto actualmente solo muestra un mensaje de éxito. Para producción, necesitarás integrar un servicio de backend o email service (ej: SendGrid, Resend, etc.)
- Las imágenes del equipo son placeholders. Reemplázalas con fotos reales en `/public/team/`
- Los artículos del blog son ejemplos. Agrega contenido real según tus necesidades

## 📄 Licencia

Este proyecto está disponible para uso del estudio contable.

---

**Desarrollado con ❤️ usando Next.js y Tailwind CSS**
