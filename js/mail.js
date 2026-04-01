(function () {
    emailjs.init("VCE3FJ8ROYTSQ909c");
})();

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");
    const inputs = form.querySelectorAll("input, textarea");

    // 🔥 VALIDASI REAL-TIME
    inputs.forEach(input => {
        input.addEventListener("input", function () {
            validateField(input);
        });
    });

    function validateField(input) {
        // hanya angka untuk contact
        if (input.id === "contact") {
            input.value = input.value.replace(/[^0-9]/g, '');
        }

        if (!input.checkValidity()) {
            input.classList.add("is-invalid");
            input.classList.remove("is-valid");
        } else {
            input.classList.remove("is-invalid");
            input.classList.add("is-valid");
        }
    }

    // 🚀 SUBMIT FORM (SATU SAJA!)
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let isValid = true;

        inputs.forEach(input => {
            validateField(input);
            if (!input.checkValidity()) {
                isValid = false;
            }
        });

        if (!isValid) return;

        // 🔥 EMAILJS
        emailjs.send("service_jd5qokt", "template_j4pdiec", {
            from_name: document.getElementById("name").value,
            from_email: document.getElementById("email").value,
            contact: document.getElementById("contact").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value
        })
        .then(function () {

            // ✅ Toast sukses
            const toast = new bootstrap.Toast(document.getElementById('successToast'));
            toast.show();

            // 🔄 Reset form
            form.reset();

            // 🧹 Hapus validasi
            inputs.forEach(input => {
                input.classList.remove("is-valid", "is-invalid");
            });

        })
        .catch(function (error) {

            // ❌ Toast error
            const toast = new bootstrap.Toast(document.getElementById('errorToast'));
            toast.show();

            console.log("ERROR DETAIL:", error);
        });

    });

});
