let guruData = [
    ["196805221990021002", "Ngakan Ketut Tresnabudi", "Fisika", "Kepala Sekolah", "../img/ngakan.jpg"],
    ["196807211990032004", "Ni Made Puri", "Kimia", "Waka Sarana", "../img/puri.jpg"],
    ["196610281991031014", "Dewa Made Wija", "Fisika", "Guru Fisika", "../img/wija.jpg"],
    ["196907301995122004", "Ni Made Wardwi", "Matematika", "Guru Matematika", "../img/wardwi.jpg"],
    ["196512301989011002", "Dewa Gede Ngurah Semarabawa", "Kesenian", "Waka Kesiswaan", "../img/ngurah.jpg"],
    // Tambahkan foto untuk guru lainnya...
  ];
  
  function renderTable(filter = "") {
    const tbody = document.getElementById("guruBody");
    tbody.innerHTML = "";
  
    guruData.forEach((guru, index) => {
      const [nip, nama, mapel, jabatan, foto] = guru;
      const combined = `${nip} ${nama} ${mapel} ${jabatan}`.toLowerCase();
  
      if (combined.includes(filter.toLowerCase())) {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${index + 1}</td>
          <td><img src="${foto}" alt="${nama}" width="60" class="zoom-img" /></td>
          <td>${nip}</td>
          <td>${nama}</td>
          <td>${mapel}</td>
          <td>${jabatan}</td>
          <td class="actions">
            <button onclick="editGuru(${index})">Edit</button>
            <button onclick="hapusGuru(${index})">Hapus</button>
          </td>
        `;
        tbody.appendChild(row);
      }
    });
  }
  
  function editGuru(index) {
    const [nip, nama, mapel, jabatan, foto] = guruData[index];
    document.getElementById("nip").value = nip;
    document.getElementById("nama").value = nama;
    document.getElementById("mapel").value = mapel;
    document.getElementById("jabatan").value = jabatan;
    document.getElementById("foto").value = foto;
    document.getElementById("editIndex").value = index;
  
    // Tampilkan preview foto saat edit
    const preview = document.getElementById("previewFoto");
    preview.src = foto;
    preview.style.display = "block";
  
    // Scroll ke form
    document.getElementById("guruForm").scrollIntoView({ behavior: "smooth" });
  }
  
  function hapusGuru(index) {
    if (confirm("Yakin ingin menghapus data ini?")) {
      guruData.splice(index, 1);
      renderTable();
    }
  }
  
  function searchGuru() {
    const query = document.getElementById("searchInput").value;
    renderTable(query);
  }
  
  document.getElementById("guruForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const nip = document.getElementById("nip").value;
    const nama = document.getElementById("nama").value;
    const mapel = document.getElementById("mapel").value;
    const jabatan = document.getElementById("jabatan").value;
    const foto = document.getElementById("foto").value;
    const editIndex = document.getElementById("editIndex").value;
  
    if (editIndex === "") {
      guruData.push([nip, nama, mapel, jabatan, foto]);
    } else {
      guruData[editIndex] = [nip, nama, mapel, jabatan, foto];
      document.getElementById("editIndex").value = "";
    }
  
    this.reset();
    document.getElementById("previewFoto").style.display = "none";
    renderTable();
  });
  
  renderTable();
  