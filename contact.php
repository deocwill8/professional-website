error_reporting(-1);
ini_set('display_errors', 'On');
set_error_handler("var_dump");

<?php
   //$to = "Deona Williams <contact@deonawilliams.com>"; 
   //$from = "contact@deonawilliams.com";         
   $name = $_POST["name"];
   $subject = $_POST["subject"];       
   $message = $_POST["message"];
   $email = $_POST["email"];
   $headers = "From: contact@deonawilliams.com" . "\r\n" .
    "X-Mailer: PHP/" . phpversion();

    $message ="";
    $message .="Name : ";
    $message .=$name;
    //$.body .="\n";
    $message .="Subject : ";
    $message .=$subject;
    //$.body .="\n";
    $message .="Message : ";
    $message .=$message;
    //$.body .="\n";
    $message .="Email : ";
    $message .=$email;
    //$.body .="\n";

$go = mail('contact@deonawilliams.com', $subject, $message, $headers);

if($go) {
    print("Success");
} else {
    print("Failed to send");
}
?>
