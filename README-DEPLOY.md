# Guía para Desplegar en Netlify

## 📋 Preparación

El proyecto ya está configurado con el archivo `netlify.toml`. Solo necesitas seguir estos pasos:

## 🚀 Opción 1: Desplegar desde GitHub (Recomendado)

### 1. Sube tu código a GitHub

```bash
# Si aún no tienes un repositorio en GitHub
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/tu-usuario/estudio-contable.git
git push -u origin main
```

### 2. Conecta con Netlify

1. Ve a [netlify.com](https://www.netlify.com)
2. Inicia sesión o crea una cuenta
3. Click en **"Add new site"** → **"Import an existing project"**
4. Selecciona **GitHub** y autoriza Netlify
5. Selecciona tu repositorio `estudio-contable`
6. Netlify detectará automáticamente la configuración:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
   - **Framework:** Next.js
7. Click en **"Deploy site"**

### 3. Configuración automática

Netlify instalará automáticamente el plugin `@netlify/plugin-nextjs` durante el primer deploy.

## 🚀 Opción 2: Desplegar manualmente (Netlify CLI)

### 1. Instala Netlify CLI

```bash
npm install -g netlify-cli
```

### 2. Inicia sesión en Netlify

```bash
netlify login
```

### 3. Despliega el sitio

```bash
# Build del proyecto
npm run build

# Inicia el deploy
netlify deploy

# Para producción
netlify deploy --prod
```

## 🚀 Opción 3: Arrastrar y Soltar (Drag & Drop)

1. Ve a [netlify.com](https://www.netlify.com)
2. Inicia sesión o crea una cuenta
3. En el dashboard, arrastra la carpeta `.next` (después de hacer `npm run build`) a la zona de deploy
4. ⚠️ **Nota:** Esta opción no es recomendada para Next.js porque necesitas hacer rebuild cada vez que cambias algo

## ✅ Verificación Post-Deploy

Después del deploy, verifica que:

- ✅ El sitio carga correctamente
- ✅ Las imágenes se muestran (verifica `/public/images/`)
- ✅ Los enlaces de WhatsApp funcionan
- ✅ Todas las páginas están accesibles

## 🔧 Variables de Entorno (Si las necesitas)

Si necesitas agregar variables de entorno:

1. Ve a **Site settings** → **Environment variables**
2. Agrega las variables necesarias (ej: `NEXT_PUBLIC_API_URL`)

## 📝 Notas Importantes

- El primer deploy puede tardar unos minutos
- Netlify actualizará automáticamente el sitio cada vez que hagas push a GitHub (si usas la Opción 1)
- El plugin `@netlify/plugin-nextjs` se instala automáticamente en el primer deploy

## 🆘 Solución de Problemas

### Error: Build failed
- Verifica que `npm run build` funciona localmente
- Revisa los logs en Netlify para ver el error específico

### Las imágenes no se muestran
- Verifica que las imágenes estén en `/public/images/`
- Asegúrate de que las rutas en el código sean correctas (`/images/...`)

### Error 404 en rutas
- Esto debería estar resuelto con el plugin de Next.js
- Verifica que `netlify.toml` esté en la raíz del proyecto

