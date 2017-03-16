<?php
    $formData = file_get_contents( 'php://input' );
    $data = json_decode($formData);
    if ($data) {
        $name = $data->name;
        $email = $data->email;
        $sendermessage = $data->subject;
        $message = $data->message;

        if ( $name != '') {
            $mailTo = 'contact@deonawilliams.com';
            $subject = 'New contact form submission';
            $body  = 'From: ' . $name . "\n";
            $body  = 'Subject: ' . $sendermessage . "\n";
            $body .= 'Email: ' . $email . "\n";
            $body .= "Message:\n" . $message . "\n\n";

            $success = mail( $mailTo, $subject, $body );

            if ( $success ) {
                $response[ 'success' ] = true;
            }
        }
    }
?>