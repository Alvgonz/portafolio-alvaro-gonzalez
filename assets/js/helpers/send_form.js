const formDOM = document.querySelector('#form');
const modal = document.querySelector('#modal');
const closeButton = document.querySelector('#btn__close-modal');

function openModal() {
    modal.open = true;
}

function closeModal() {
    modal.open = false;
}

function sendEmail() {
    formDOM.addEventListener('submit', (e) => {
        e.preventDefault();
        const params = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value,
        }

        if (params.name && params.email && params.subject && params.message) {
            emailjs.send('service_6phg5jj','template_asljz0b', params);
            emailjs.send('service_6phg5jj','template_4ctsd3p', params).then(openModal());

        }
    });
}

closeButton.addEventListener('click', closeModal);
export default sendEmail;