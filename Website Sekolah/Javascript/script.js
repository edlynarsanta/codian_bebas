// Menampilkan tanggal dan waktu sekarang di bagian footer
document.addEventListener("DOMContentLoaded", function () {
    const footer = document.querySelector("footer");
    const waktu = new Date().toLocaleString("id-ID", {
      dateStyle: "full",
      timeStyle: "short",
    });
    const infoWaktu = document.createElement("p");
    infoWaktu.textContent = "Sekarang: " + waktu;
    footer.appendChild(infoWaktu);
  });
  
  // Fungsi tombol selamat datang
  function salamSelamatDatang() {
    alert("Selamat datang di Website resmi  SMA Negeri 1 Tampaksiring!");
  }
  
  // Tambah event klik ke menu
  const menuLinks = document.querySelectorAll("nav ul li a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      alert(`Kamu mengklik menu "${e.target.textContent}"`);
    });
  });
  function renderTable() {
    const tbody = document.getElementById("guruBody");
    tbody.innerHTML = "";
    guruData.forEach((guru, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${index + 1}</td>
        <td><img src="${guru[4]}" alt="${guru[1]}" width="60" /></td>
        <td>${guru[0]}</td>
        <td>${guru[1]}</td>
        <td>${guru[2]}</td>
        <td>${guru[3]}</td>
        <td class="actions">
          <button onclick="editGuru(${index})">Edit</button>
          <button onclick="hapusGuru(${index})">Hapus</button>
        </td>
      `;
      tbody.appendChild(row);
    });
  }
  