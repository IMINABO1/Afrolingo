// Login Popup Functionality
const signInBtn = document.getElementById('signInBtn');
const becomeMemberBtn = document.getElementById('becomeMemberBtn');
const loginPopup = document.getElementById('loginPopup');
const closePopup = document.getElementById('closePopup');

signInBtn.addEventListener('click', () => {
    loginPopup.classList.remove('hidden');
    console.log('clicked');
});

becomeMemberBtn.addEventListener('click', () => {
    loginPopup.classList.remove('hidden');
    console.log('clicked');
});

closePopup.addEventListener('click', () => {
    loginPopup.classList.add('hidden');
});

// Close popup when clicking outside
loginPopup.addEventListener('click', (e) => {
    if (e.target === loginPopup) {
        loginPopup.classList.add('hidden');
    }
});

// login form validation
function checkLoginForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (email === '' || password === '') {
        alert('Please enter your email and password');
        console.log('Please enter your email and password');
        document.getElementById('errorMessage').textContent = 'Please enter your email and password';
        return false;
    }
}

function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('eyeIcon');
    

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
        // eyeIcon.innerHTML = `<path d="M10 2C6 2 2.73 4.12 1 7.5 2.73 10.88 6 13 10 13s7.27-2.12 9-5.5C17.27 4.12 14 2 10 2zm0 9a3 3 0 100-6 3 3 0 000 6zm8.46 3.87a1 1 0 00-1.42 1.42l1.5 1.5a1 1 0 101.42-1.42l-1.5-1.5z"/>`; // Updated eye-off icon
    } else {
        passwordInput.type = 'password';
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
        // eyeIcon.innerHTML = `<path d="M10 2C6 2 2.73 4.12 1 7.5 2.73 10.88 6 13 10 13s7.27-2.12 9-5.5C17.27 4.12 14 2 10 2zm0 9a3 3 0 100-6 3 3 0 000 6z"/>`; // Eye icon
    }
}