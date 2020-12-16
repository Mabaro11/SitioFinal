<?php
if(isset($_POST['email'])) {

<bold>// Debes editar las próximas dos líneas de código de acuerdo con tus preferencias</bold>
$email_to = "mauriciobaroni11@gmail.com";
$email_subject = "Contacto desde el sitio web";

<bold>// Aquí se deberían validar los datos ingresados por el usuario</bold>
if(!isset($_POST['name']) ||
!isset($_POST['email']) ||
!isset($_POST['subject']) ||
!isset($_POST['message'])) {

echo "<b>Ocurrió un error y el formulario no ha sido enviado. </b><br />";
echo "Por favor, vuelva atrás y verifique la información ingresada<br />";
die();
}

$email_message = "Detalles del formulario de contacto:\n\n";
$email_message .= "Nombre: " . $_POST['name'] . "\n";
$email_message .= "E-mail: " . $_POST['email'] . "\n";
$email_message .= "Teléfono: " . $_POST['subject'] . "\n";
$email_message .= "Comentarios: " . $_POST['message'] . "\n\n";


<bold>// Ahora se envía el e-mail usando la función mail() de PHP</bold>
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);

echo "¡El formulario se ha enviado con éxito!";
}
?>