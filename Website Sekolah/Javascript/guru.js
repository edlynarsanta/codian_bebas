let guruData = [
    ["196805221990021002", "Ngakan Ketut Tresnabudi", "Fisika", "Kepala Sekolah"],
    ["196807211990032004", "Ni Made Puri", "Kimia", "Waka Sarana"],
    ["196610281991031014", "Dewa Made Wija", "Fisika", "Guru Fisika"],
    ["196907301995122004", "Ni Made Wardwi", "Matematika", "Guru Matematika"],
    ["196512301989011002", "Dewa Gede Ngurah Semarabawa", "Kesenian", "Waka Kesiswaan"],
    ["196609051989031010", "Dewa Gede Agung", "Bahasa Indonesia", "Guru Bahasa Indonesia"],
    ["196611101986061001", "I Nyoman Parnata", "Penjaskes", "Guru Penjasorkes"],
    ["196512301986011005", "I Ketut Ngara", "Matematika", "Guru Matematika"],
    ["196711151997031004", "I Gusti Made Oka Sutawijaya", "Kimia", "Guru Kimia"],
    ["196504232006041003", "I Made Karsa", "Ekonomi", "Guru Ekonomi"],
    ["197404162006041015", "Dewa Puturai", "Bahasa Inggris", "Waka Kurikulum"],
    ["198211222006042013", "Dewa Ayu Sri Sunaryani", "Bahasa Inggris", "Guru Bahasa Inggris"],
    ["196706012006041016", "I Nyoman Pujiantara", "Biologi", "Guru Biologi"],
    ["198406182010011032", "I Nyoman Artha Udiana, S.Kom.", "Informatika", "Guru Informatika"],
    ["198412292010011020", "I Made Widiana", "Bude Pekerti", "Guru BK"],
    ["198312152010011023", "I Wayan Suhari Yudika", "Pkn", "Guru PKN"],
    ["196512311988041027", "I Wayan Suastika", "Penjasorkes", "Guru Penjasorkes"],
    ["5104054212760002", "Desak Putu Puspawati", "Geografi", "Guru Geografi"],
    ["5104046706930001", "Dewa Ayu Sri Widiani", "Matematika", "Guru Matematika"],
    ["5104042712920002", "Pande Kadek Yuda Mahardika", "Ekonomi", "Guru Ekonomi"]
  ];
  
  function renderTable() {
    const tbody = document.getElementById("guruBody");
    tbody.innerHTML = "";
    guruData.forEach((guru, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${index + 1}</td>
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
  
  function editGuru(index) {
    const [nip, nama, mapel, jabatan] = guruData[index];
    document.getElementById("nip").value = nip;
    document.getElementById("nama").value = nama;
    document.getElementById("mapel").value = mapel;
    document.getElementById("jabatan").value = jabatan;
    document.getElementById("editIndex").value = index;
  }
  
  function hapusGuru(index) {
    if (confirm("Yakin ingin menghapus data ini?")) {
      guruData.splice(index, 1);
      renderTable();
    }
  }
  
  document.getElementById("guruForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const nip = document.getElementById("nip").value;
    const nama = document.getElementById("nama").value;
    const mapel = document.getElementById("mapel").value;
    const jabatan = document.getElementById("jabatan").value;
    const editIndex = document.getElementById("editIndex").value;
  
    if (editIndex === "") {
      guruData.push([nip, nama, mapel, jabatan]);
    } else {
      guruData[editIndex] = [nip, nama, mapel, jabatan];
      document.getElementById("editIndex").value = "";
    }
  
    this.reset();
    renderTable();
  });
  
  renderTable();
  