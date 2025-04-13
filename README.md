# web hangman game

<img src="img/template.png">

---

# Juego del Ahorcado - Web Version

**Un clásico juego de palabras con interfaz web interactiva y modular**

---

## Descripción
Este proyecto implementa el popular juego del ahorcado utilizando **HTML5, CSS3, JavaScript ES6+** y una arquitectura modular. El jugador debe adivinar una palabra oculta ingresando letras, recibiendo retroalimentación visual en tiempo real.

---

## Tecnologías utilizadas
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Estructura**: Arquitectura modular con componentes reutilizables
- **Herramientas**: Webpack, ESLint 

---

## 📁 Estructura del proyecto
```
📦 public
├── Assets/
│   ├── Color/
│   └── style/
├── Components/
│   ├── Main/
│   ├── ModalLose/
│   ├── ModalPlay/
│   ├── ModalWin/
│   └── StickMan/
├── Service/
│   └── Game.js
└── index.html
```

---

## Características clave
1. **Interfaz intuitiva**: Diseño responsive con feedback visual (verde para aciertos, rojo para errores).
2. **Modularidad**: Componentes separados para:
   - Pantalla principal (`Main`)
   - Mensajes de victoria/derrota (`ModalWin`, `ModalLose`)
   - Dibujo del ahorcado (`StickMan`)
3. **Personalización**: 
   - Ingreso de palabras personalizadas al inicio.
   - Opciones de dificultad (número máximo de intentos).
4. **Animaciones**: Transiciones suaves para la aparición de letras y partes del ahorcado.

---

## Instalación
```bash
# Clona el repositorio
git clone https://github.com/tu-usuario/juego-ahorcado.git

# Abre el archivo principal
cd juego-ahorcado
open public/index.html
```

---

## Cómo jugar
1. Ingresa una palabra secreta al iniciar el juego.
2. Adivina las letras haciendo clic en el teclado virtual o escribiendo en el input.
3. Si aciertas, la letra se muestra en verde.
4. Si fallas, se dibuja una parte del ahorcado.
5. Ganas si completas la palabra antes de que se complete el ahorcado (https://www.alura.com.br).

---

## Contribuciones
¡Ayúda a mejorar el juego! Para contribuir:
1. Crea un fork del repositorio.
2. Realiza cambios en una nueva rama.
3. Envía un pull request detallando las mejoras.

---

## Licencia
Este proyecto está bajo la licencia [MIT](LICENSE).

---

## Contacto
Para consultas o sugerencias:
- Email: morenogjuanma@gmail.com
- GitHub: juanitoelorigi
- Instagram: @jmmzz18

---

**¡Diviértete jugando y aprendiendo! 🎯**  
*Última actualización: 12/04/25*

---
