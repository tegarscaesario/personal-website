<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nama = $_POST['nama'];
    $email = $_POST['email'];
    $subjek = $_POST['subjek'];
    $pesan = $_POST['pesan'];
    
    // Alamat email tujuan
    $tujuan = "endzflypnix@gmail.com";
    
    // Membangun pesan email
    $pesan_email = "Nama: $nama\n";
    $pesan_email .= "Email: $email\n";
    $pesan_email .= "Pesan:\n$pesan\n";
    
    // Mengirim email
    mail($tujuan, $subjek, $pesan_email);
    
    echo "Pesan telah terkirim.";
}
?>
