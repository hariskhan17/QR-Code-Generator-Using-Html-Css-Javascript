const imgBox = document.getElementById("imgBox");
const qrImage = document.getElementById("qrImage");
const qrText = document.getElementById("qrText");

function generateQR() {
    const qrValue = qrText.value.trim();
    if (qrValue) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrValue);
        imgBox.classList.add("show-img");
        qrText.value = ''
    } else {
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Please enter some text or URL to generate a QR code!',
        });
    }
}
