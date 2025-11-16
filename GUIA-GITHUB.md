# Guía para Subir el Proyecto a GitHub

## ❌ NO comprimas en ZIP

GitHub usa Git, no archivos ZIP. Sigue estos pasos:

## 📋 Paso a Paso

### 1. Verifica que tengas Git instalado

Abre PowerShell o CMD y ejecuta:

```bash
git --version
```

Si no tienes Git, descárgalo de: https://git-scm.com/download/win

### 2. Inicializa Git en tu proyecto

Abre PowerShell o CMD en la carpeta de tu proyecto y ejecuta:

```bash
cd "C:\Users\Educacion\Desktop\estudio contable"
git init
```

### 3. Agrega todos los archivos

```bash
git add .
```

### 4. Crea el primer commit

```bash
git commit -m "Initial commit - Estudio contable website"
```

### 5. Crea un repositorio en GitHub

1. Ve a [github.com](https://github.com) e inicia sesión
2. Click en el botón **"+"** (arriba a la derecha) → **"New repository"**
3. Nombre: `estudio-contable` (o el que prefieras)
4. Deja **público** o **privado** (como prefieras)
5. **NO marques** "Initialize with README" (ya tienes archivos)
6. Click en **"Create repository"**

### 6. Conecta tu proyecto con GitHub

GitHub te mostrará comandos. Usa estos (reemplaza `TU-USUARIO` con tu usuario de GitHub):

```bash
git branch -M main
git remote add origin https://github.com/TU-USUARIO/estudio-contable.git
git push -u origin main
```

**Ejemplo:**
Si tu usuario es `juanperez`, sería:
```bash
git remote add origin https://github.com/juanperez/estudio-contable.git
```

### 7. Sube tu código

```bash
git push -u origin main
```

GitHub te pedirá autenticación. Puedes usar:
- Tu usuario y contraseña de GitHub (si tienes autenticación de dos factores, necesitarás un token)
- O configura GitHub CLI para hacerlo más fácil

## 🔐 Autenticación en GitHub

### Opción 1: Token Personal (Recomendado)

1. Ve a GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click en **"Generate new token"**
3. Dale un nombre y marca los permisos: `repo`
4. Copia el token que te da
5. Cuando Git te pida contraseña, usa el token en lugar de la contraseña

### Opción 2: GitHub Desktop (Más fácil)

Si prefieres una interfaz visual:
1. Descarga [GitHub Desktop](https://desktop.github.com/)
2. Inicia sesión
3. File → Add Local Repository → Selecciona tu carpeta
4. Click en "Publish repository"

## ✅ Verificación

Después de hacer `git push`, ve a tu repositorio en GitHub y deberías ver todos tus archivos.

## 🔄 Para futuros cambios

Cada vez que hagas cambios:

```bash
git add .
git commit -m "Descripción de los cambios"
git push
```

## 📝 Nota Importante

El archivo `.gitignore` ya está configurado para **NO subir**:
- `node_modules/` (carpeta muy pesada)
- `.next/` (archivos de build)
- Archivos temporales

Solo se suben los archivos fuente necesarios.

