<?php
    $contactFormData = file_get_contents( 'php://input' );
    $data = json_decode($contactFormData);
    if ($data) {
        $sendername = $data->contactname;
        $sendersubject = $data->subject;
        $senderemail = $data->email;
        $message = $data->message;
        
        if ( $sendername != '') {
            $mailTo = 'contact@deonawilliams.com';
            $subject = 'New contact form submission';
            $body  .= 'From: ' . $sendername . "\n";
            $body  .= 'Subject: ' . $sendersubject . "\n";
            $body .= 'Email: ' . $senderemail . "\n";
            $body .= "Message:\n" . $message . "\n\n";

            $sent = mail( $mailTo, $subject, $body );

        }
    }
?>