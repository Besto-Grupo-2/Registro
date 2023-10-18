document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault();

    let nombre = document.getElementById('nombre');
    let apellido = document.getElementById('apellido');
    let email = document.getElementById('email');
    let regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let password = document.getElementById('password1');
    let password2 = document.getElementById('password2');
    let terminos = document.getElementById('terminos');
    let botonTerminos = document.getElementById('botonTerminos');

    if (nombre.value === '') {
        nombre.classList.add("is-invalid")
        nombre.classList.remove("is-valid")
    } else {
        nombre.classList.remove("is-invalid")
        nombre.classList.add("is-valid")
    }
    nombre.addEventListener('input',()=>{
        if (nombre.value === '') {
            nombre.classList.add("is-invalid")
            password1.classList.remove("is-valid")
        } else {
            nombre.classList.remove("is-invalid")
            nombre.classList.add("is-valid")
        }
    })

    if (apellido.value === '') {
        apellido.classList.add("is-invalid")
    } else {
        apellido.classList.remove("is-invalid")
        apellido.classList.add("is-valid")
    }
    apellido.addEventListener('input',()=>{
        apellido.classList.remove("is-invalid")
        apellido.classList.add("is-valid")
    })
    if (email.value === '' || !regEx.test(email.value)) {
        email.classList.add("is-invalid")
    } else {
        email.classList.remove("is-invalid")
        email.classList.add("is-valid")
    }
    email.addEventListener('input',()=>{
        if (email.value === '' || !regEx.test(email.value)) {
            email.classList.add("is-invalid")
        } else {
            email.classList.remove("is-invalid")
            email.classList.add("is-valid")
        }
    })
    if (password1.value.length < 6) {
        password1.classList.add("is-invalid")
    } else {
        password1.classList.remove("is-invalid")
        password1.classList.add("is-valid")
    }
    password1.addEventListener('input',()=>{
        if (password1.value.length < 6) {
            password1.classList.add("is-invalid")
        } else {
            password1.classList.remove("is-invalid")
            password1.classList.add("is-valid")
        }
    })

    if ((password1.value !== password2.value) || (password2.value == '')) {
        password2.classList.add("is-invalid")
    } else {
        password2.classList.remove("is-invalid")
        password2.classList.add("is-valid")
    }
    password2.addEventListener('input',()=>{
        if ((password1.value !== password2.value) || (password2.value == '')) {
            password2.classList.add("is-invalid")
        } else {
            password2.classList.remove("is-invalid")
            password2.classList.add("is-valid")
        }
    })
    if (!terminos.checked){
        terminos.classList.add("is-invalid")
        botonTerminos.classList.add("is-invalid")
    } else {
        terminos.classList.remove("is-invalid")
        botonTerminos.classList.remove("is-invalid")
        terminos.classList.add("is-valid")
        botonTerminos.classList.add("is-valid")
    }
    terminos.addEventListener('change',()=>{
        if (!terminos.checked){
            terminos.classList.add("is-invalid")
        } else {
            terminos.classList.remove("is-invalid")
            terminos.classList.add("is-valid")
        }
    })

});