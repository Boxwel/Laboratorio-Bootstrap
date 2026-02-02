document.addEventListener("DOMContentLoaded", function () {
  const formTarea = document.getElementById("formTarea");
  const inputTarea = document.getElementById("inputTarea");
  const listaTareas = document.getElementById("listaTareas");
  const alertaExito = document.getElementById("alertaExito");

  let tareas = [
    { id: 1, texto: "Tender la cama" },
    { id: 2, texto: "Pasear el perro" },
  ];

  function renderizarTareas() {
    listaTareas.innerHTML = "";
    tareas.forEach((tarea) => {
      const tareaElement = document.createElement("div");
      tareaElement.className =
        "list-group-item d-flex justify-content-between align-items-center";
      tareaElement.innerHTML = `
                        <span>${tarea.texto}</span>
                        <button class="btn btn-outline-danger btn-sm" onclick="eliminarTarea(${tarea.id})">
                            <i class="bi bi-trash"></i>
                        </button>
                    `;
      listaTareas.appendChild(tareaElement);
    });
  }

  formTarea.addEventListener("submit", function (e) {
    e.preventDefault();

    const texto = inputTarea.value.trim();

    if (texto.length < 3) {
      inputTarea.classList.add("is-invalid");
      return;
    }

    inputTarea.classList.remove("is-invalid");

    const nuevaTarea = {
      id: Date.now(),
      texto: texto,
    };

    tareas.push(nuevaTarea);
    renderizarTareas();

    alertaExito.classList.remove("d-none");

    inputTarea.value = "";

    setTimeout(() => {
      alertaExito.classList.add("d-none");
    }, 3000);
  });

  window.eliminarTarea = function (id) {
    tareas = tareas.filter((tarea) => tarea.id !== id);
    renderizarTareas();
  };

  inputTarea.addEventListener("input", function () {
    if (this.value.trim().length >= 3) {
      this.classList.remove("is-invalid");
      this.classList.add("is-valid");
    } else {
      this.classList.remove("is-valid");
    }
  });

  renderizarTareas();
});
