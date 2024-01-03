const customerDNIInputField = document.getElementById("customer-dni");
const validationMessageForDNI = document.getElementById("customer-dni-alert");

const customerPhoneInputField = document.getElementById("customer-phone");
const validationMessageForPhone = document.getElementById(
    "customer-phone-alert"
);

const customerEmailInputField = document.getElementById("customer-email");
const validationMessageForEmail = document.getElementById(
    "customer-email-alert"
);

// Asegurarse de que acepte los términos y condiciones

const termsCheckboxField = document.getElementById("terms-option");

termsCheckboxField.checked = true;

termsCheckboxField.addEventListener("change", (evt) => {
    let submitButton = document.getElementById("customer-form-submit");

    if (!evt.target.checked) {
        submitButton.setAttribute("disabled", false);
    } else {
        submitButton.removeAttribute("disabled");
    }
});

// Evitar tipear caracteres no numéricos

customerDNIInputField.addEventListener("keypress", (event) => {
    const key = event.key;

    if (!/^\d$/.test(key)) {
        event.preventDefault();
    }
});

customerPhoneInputField.addEventListener("keypress", (event) => {
    const key = event.key;

    if (!/^\d$/.test(key)) {
        event.preventDefault();
    }
});

// Eventos de entrada de teclado

let oninputCustomerDNITimeout = null;

function onInputDoValidateCustomerDNI() {
    validationMessageForDNI.hidden = true;
    clearTimeout(oninputCustomerDNITimeout);

    oninputCustomerDNITimeout = setTimeout(() => {
        validateCustomerDNI();
    }, 800);
}

let oninputPhoneTimeout = null;

function onInputDoValidateCustomerPhone() {
    validationMessageForPhone.hidden = true;
    clearTimeout(oninputPhoneTimeout);

    oninputPhoneTimeout = setTimeout(() => {
        validateCustomerPhone();
    }, 800);
}

let oninputEmailTimeout = null;

function onInputDoValidateCustomerEmail() {
    validationMessageForEmail.hidden = true;
    clearTimeout(oninputEmailTimeout);

    oninputEmailTimeout = setTimeout(() => {
        validateCustomerEmail();
    }, 800);
}

// Evento de formulario

function onSubmitDoValidateCustomerLoginForm() {
    let isDNIValid = validateCustomerDNI();
    let isPhoneValid = validateCustomerPhone();
    let isEmailValid = validateCustomerEmail();

    document.querySelector(".invalid")?.focus();

    return isDNIValid && isPhoneValid && isEmailValid;
}

// Validación de inputs

function validateCustomerDNI() {
    const currentValue = customerDNIInputField.value;
    const notAllowed = /[^0-9]/;
    const eightDigits = /\d{8}$/;

    let errorMessage = "";

    if (currentValue.length === 0) {
        errorMessage = "Este campo es requerido.";
    } else if (currentValue.length > 8) {
        errorMessage = "El número de DNI no debe superar los 8 dígitos.";
    } else if (notAllowed.test(currentValue)) {
        errorMessage = "El número de DNI debe ser numérico";
    } else if (!eightDigits.test(currentValue)) {
        errorMessage = "El número de DNI debe contener exactamente 8 dígitos.";
    }

    if (errorMessage.length > 0) {
        customerDNIInputField.classList.add("invalid");
        validationMessageForDNI.hidden = false;
        validationMessageForDNI.innerText = errorMessage;

        return false;
    }

    customerDNIInputField.classList.remove("invalid");
    validationMessageForDNI.hidden = true;

    return true;
}

function validateCustomerPhone() {
    const currentValue = customerPhoneInputField.value;
    const notAllowed = /[^0-9]/;
    const nineDigits = /9\d{8}$/;

    let errorMessage = "";

    if (currentValue.length === 0) {
        errorMessage = "Este campo es requerido.";
    } else if (currentValue.length > 9) {
        errorMessage = "El número de celular no debe superar los 9 dígitos.";
    } else if (notAllowed.test(currentValue)) {
        errorMessage = "El número de celular debe ser numérico.";
    } else if (currentValue.at(0) != 9) {
        errorMessage = "El número de celular debe empezar con el dígito 9.";
    } else if (!nineDigits.test(currentValue)) {
        errorMessage =
            "El número de celular debe contener exactamente 9 dígitos.";
    }

    if (errorMessage.length > 0) {
        customerPhoneInputField.classList.add("invalid");
        validationMessageForPhone.hidden = false;
        validationMessageForPhone.innerText = errorMessage;

        return false;
    }

    customerPhoneInputField.classList.remove("invalid");
    validationMessageForPhone.hidden = true;

    return true;
}

function validateCustomerEmail() {
    const currentValue = customerEmailInputField.value;
    const notAllowed = /[^a-zA-Z0-9._@]/;
    const email = /^[a-zA-Z0-9._]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,}$/;

    let errorMessage = "";

    if (currentValue.length === 0) {
        errorMessage = "Este campo es requerido.";
    } else if (notAllowed.test(currentValue)) {
        errorMessage =
            "El e-mail solo puede contener los siguientes caracteres: letras, números, punto (.), guión bajo (_) y arroba (@).";
    } else if (!email.test(currentValue)) {
        errorMessage = "Por favor, ingrese un e-mail válido.";
    }

    if (errorMessage.length > 0) {
        customerEmailInputField.classList.add("invalid");
        validationMessageForEmail.hidden = false;
        validationMessageForEmail.innerText = errorMessage;

        return false;
    }

    customerEmailInputField.classList.remove("invalid");
    validationMessageForEmail.hidden = true;

    return true;
}
