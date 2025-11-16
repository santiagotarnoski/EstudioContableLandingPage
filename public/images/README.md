# 📸 Guía para Agregar Imágenes al Sitio

## 📁 Estructura de Carpetas por Sectores

Coloca las imágenes en las siguientes carpetas según su tipo. **IMPORTANTE**: Los nombres deben ser exactos.

---

## 🎯 SECTOR 1: Servicios (`/public/images/services/`)

Agrega las imágenes de servicios con estos nombres **exactos**:

| Nombre del Archivo | Servicio | Descripción |
|-------------------|----------|-------------|
| `contabilidad.jpg` | Contabilidad General y Balances | Imagen relacionada con contabilidad, balances, reportes financieros |
| `impuestos.jpg` | Liquidación de Impuestos y Sueldos | Imagen relacionada con impuestos, cálculos, liquidaciones |
| `pymes.jpg` | Asesoramiento para PyMEs y Emprendedores | Imagen relacionada con emprendimientos, pequeñas empresas |
| `planificacion.jpg` | Planificación Fiscal | Imagen relacionada con estrategias fiscales, optimización |

**📐 Tamaño recomendado**: 1200x800px (formato horizontal/landscape)
**📦 Formato**: JPG o PNG

---

## 📝 SECTOR 2: Blog (`/public/images/blog/`)

Agrega las imágenes de los posts del blog usando el **ID exacto** del post:

| Nombre del Archivo | Post del Blog |
|-------------------|---------------|
| `vencimientos-2024.jpg` | Vencimientos Impositivos 2024: Calendario Completo |
| `monotributo-2024.jpg` | Nuevas Categorías de Monotributo 2024: ¿Cómo te Afecta? |
| `tips-pymes.jpg` | 5 Tips Contables para PyMEs que Quieren Crecer |
| `planificacion-fiscal.jpg` | Planificación Fiscal: Estrategias para Ahorrar Impuestos |

**📐 Tamaño recomendado**: 1200x600px (formato horizontal/landscape)
**📦 Formato**: JPG o PNG

**⚠️ NOTA**: Los nombres deben coincidir exactamente con el `id` del post en `constants/index.ts`

---

## 👥 SECTOR 3: Equipo (`/public/team/`)

Agrega las fotos del equipo con estos nombres exactos:

| Nombre del Archivo | Miembro del Equipo | Rol |
|-------------------|-------------------|-----|
| `juan-perez.jpg` | Dr. Juan Pérez | Contador Público - Socio Fundador |
| `maria-garcia.jpg` | Lic. María García | Contadora Pública - Socia |
| `carlos-lopez.jpg` | CPN Carlos López | Contador Público Nacional |

**📐 Tamaño recomendado**: 400x400px (formato cuadrado)
**📦 Formato**: JPG o PNG

---

## ✅ Lista de Verificación

Usa esta lista para asegurarte de tener todas las imágenes:

### Servicios (4 imágenes)
- [ ] `contabilidad.jpg`
- [ ] `impuestos.jpg`
- [ ] `pymes.jpg`
- [ ] `planificacion.jpg`

### Blog (4 imágenes)
- [ ] `vencimientos-2024.jpg`
- [ ] `monotributo-2024.jpg`
- [ ] `tips-pymes.jpg`
- [ ] `planificacion-fiscal.jpg`

### Equipo (3 imágenes)
- [ ] `juan-perez.jpg`
- [ ] `maria-garcia.jpg`
- [ ] `carlos-lopez.jpg`

**Total: 11 imágenes**

---

## 💡 Notas Importantes

1. **Nombres exactos**: Los nombres de archivo deben coincidir exactamente con los especificados (incluyendo mayúsculas/minúsculas y extensiones).

2. **Placeholders**: Si no agregas las imágenes, el sitio mostrará un placeholder con gradiente y el icono correspondiente. Esto es funcional pero no es ideal para producción.

3. **Optimización**: Antes de subir, considera optimizar las imágenes para web (comprimir sin perder mucha calidad) para mejorar el rendimiento del sitio.

4. **Rutas**: Las imágenes se acceden desde `/public/`, así que:
   - Imágenes en `/public/images/services/` → se acceden como `/images/services/nombre.jpg`
   - Imágenes en `/public/team/` → se acceden como `/team/nombre.jpg`


