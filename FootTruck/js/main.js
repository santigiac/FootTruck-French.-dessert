// ==========================================
// Pâtisserie Sauvage - Main JavaScript
// ==========================================

document.addEventListener('DOMContentLoaded', function () {

    // --- Initialize all Bootstrap Tooltips ---
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
        new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // --- Login Modal Logic ---
    var btnSubmitLogin = document.getElementById('btnSubmitLogin');
    var btnLogin = document.getElementById('btnLogin');
    var btnLogout = document.getElementById('btnLogout');
    var welcomeMsg = document.getElementById('welcomeMsg');
    var loginModal = document.getElementById('loginModal');

    if (btnSubmitLogin) {
        btnSubmitLogin.addEventListener('click', function () {
            var username = document.getElementById('inputUser').value.trim();
            if (username !== '') {
                // Show welcome message in navbar
                welcomeMsg.textContent = 'Bienvenue, ' + username + ' !';
                welcomeMsg.style.display = 'inline';

                // Hide login button, show logout
                btnLogin.style.display = 'none';
                btnLogout.style.display = 'inline-block';

                // Close modal
                var modal = bootstrap.Modal.getInstance(loginModal);
                modal.hide();

                // Reset form
                document.getElementById('loginForm').reset();
            }
        });
    }

    // --- Logout Logic ---
    if (btnLogout) {
        btnLogout.addEventListener('click', function () {
            welcomeMsg.textContent = '';
            welcomeMsg.style.display = 'none';
            btnLogin.style.display = 'inline-block';
            btnLogout.style.display = 'none';
        });
    }

    // --- Card Rating Animation ---
    var ratingButtons = document.querySelectorAll('.btn-rate');
    ratingButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            this.style.transform = 'scale(1.5)';
            var self = this;
            setTimeout(function () {
                self.style.transform = 'scale(1)';
            }, 300);
        });
    });
});
