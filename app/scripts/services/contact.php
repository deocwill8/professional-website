<?php
   $to = 'contact@deonawilliams.com'; 
   $from = 'contact@deonawilliams.com';         
   $name = $_POST ['name'];
   $subject = $_POST ['subject'];       
   $message = $_POST ['message'];
   $email = $_POST ['email'];
   echo 'Mail sent';


    $body ="";
    $body .="Name : ";
    $body .=$name;
    $.body .="\n";
    $body .="Subject : ";
    $body .=$subject;
    $.body .="\n";
    $body .="Message : ";
    $body .=$message;
    $.body .="\n";
    $body .="Email : ";
    $body .=$email;
    $.body .="\n";

$go = mail($to, $subject, $body, "From:<$from>");

if($go) {
    print("Success");
} else {
    print("Failed to send");
}
?>

<!--$headers = $_POST ['email'].$from; -->