const usernameInput = document.getElementById("username");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

const outputUsername = document.getElementById("outputUsername");
const outputPassword = document.getElementById("outputPassword");
const status = document.getElementById("status");

// 📦 DATA KATA
const kata = [
    "Mawar", "Melati", "Anggrek", "Harimau",
    "Pelangi", "Gunung", "Samudra", "Bambu",
    "Kelapa", "Mangga", "Durian", "Elang",
    "Merpati", "Langit", "Senja", "Hujan",
    "Kucing", "Jati"
];

// 🎲 RANDOM UTIL
function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomNumber() {
    return Math.floor(Math.random() * 9000) + 1000;
}

// 🔥 GENERATE PASSWORD
function generatePassword() {
    const username = usernameInput.value.trim();

    if (!username) {
        status.textContent = "❌ Masukkan Username!";
        return;
    }

    const password = getRandomItem(kata) + getRandomNumber();

    outputUsername.value = username;
    outputPassword.value = password;

    status.textContent = "✅ Password berhasil dibuat!";
}

// 📋 COPY OUTPUT
async function copyOutput() {
    if (!outputUsername.value || !outputPassword.value) {
        status.textContent = "❌ Belum ada data untuk disalin!";
        return;
    }

    const hasil = ` USERNAME : ${outputUsername.value}
 PASSWORD : ${outputPassword.value}

━━━━━━━━━━━━━━
Download aplikasi Minitoto dan Klaim FREECHIP sekarang juga :

https://gesya.me/kontakmntt

Clear cache browser untuk optimalisasi bermain`;

    try {
        await navigator.clipboard.writeText(hasil);

        copyBtn.textContent = "COPIED ✔";
        status.textContent = "📋 Semua output berhasil disalin!";

        setTimeout(() => {
            copyBtn.textContent = "Salin Semua Output";
        }, 2000);

    } catch (err) {
        status.textContent = "❌ Gagal menyalin!";
    }
}

// 🎯 EVENT LISTENER
generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyOutput);

// 🌌 PARALLAX BACKGROUND
document.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 30;
    const y = (window.innerHeight / 2 - e.clientY) / 30;

    const layer1 = document.querySelector(".layer1");
    const layer2 = document.querySelector(".layer2");
    const layer3 = document.querySelector(".layer3");

    if (layer1 && layer2 && layer3) {
        layer1.style.transform = `translate(${x}px, ${y}px) scale(1.2)`;
        layer2.style.transform = `translate(${x * 2}px, ${y * 2}px) scale(1.2)`;
        layer3.style.transform = `translate(${x * 3}px, ${y * 3}px) scale(1.2)`;
    }
});