<?php
include('config.php');
if(isset($_POST)){
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    $to = "tegar0726@smk.belajar.id"; // Ganti dengan alamat email tujuan Anda
    $subject = "Pesan dari formulir kontak";
    $body = "Nama: $name\nEmail: $email\n\nPesan:\n$message";
    
    // Kirim email
    if (mail($to, $subject, $body)) {
        echo "Pesan Anda telah berhasil dikirim.";
    } else {
        echo "Maaf, terjadi kesalahan dalam mengirim pesan.";
    }
} else {
    echo "Akses ditolak.";
}
?>
