// Inicialización de EmailJS
emailjs.init("IabHYyXE8NAiWXUIR");

// Enviar formulario de empleado
document.getElementById("employeeForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const employeeName = document.getElementById("employeeName").value;
    const salary = document.getElementById("salary").value;
    const observations = document.getElementById("observations").value;
    const confirmationMessage = document.getElementById("confirmationMessage");

    // Enviar correo
    emailjs.send("service_mpp6kyh", "template_15sq7fi", {
        employeeName: employeeName,
        salary: salary,
        observations: observations
    }).then(() => {
        confirmationMessage.textContent = "Mensaje enviado correctamente.";
    }).catch((err) => {
        console.error("Error al enviar el correo:", err);
        confirmationMessage.textContent = "Hubo un error al enviar el mensaje.";
        confirmationMessage.style.color = "red";
    });
});

// Limpiar el formulario
document.getElementById("clearForm").addEventListener("click", function () {
    document.getElementById("employeeForm").reset();
    document.getElementById("confirmationMessage").textContent = "";
});

// Funciones de operaciones
function calculateSalary() {
    const salary = prompt("Ingrese el salario:");
    const discount = prompt("Ingrese el descuento en porcentaje:");
    const total = salary - (salary * (discount / 100));
    alert(`El salario total es: ${total}`);
}

function calculateTotalPoints() {
    const point1 = parseFloat(prompt("Ingrese el primer puntaje:"));
    const point2 = parseFloat(prompt("Ingrese el segundo puntaje:"));
    const point3 = parseFloat(prompt("Ingrese el tercer puntaje:"));
    const total = point1 + point2 + point3;
    alert(`El total de puntos es: ${total}`);
}

function calculatePercentage() {
    const points = parseFloat(prompt("Ingrese un puntaje:"));
    const percentage = points * 0.15;
    alert(`El 15% del puntaje es: ${percentage}`);
}
