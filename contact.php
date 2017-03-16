<?php
    $formData = file_get_contents( 'php://input' );
    $data = json_decode($formData);
    if ($data) {
        $sendername = $data->name;
        $sendersubject = $data->subject;
        $senderemail = $data->email;
        $message = $data->message;

        if ( $sendername != '') {
            $mailTo = 'contact@deonawilliams.com';
            $subject = 'New contact form submission';
            $body  = 'From: ' . $sendername . "\n";
            $body  = 'Subject: ' . $sendersubject . "\n";
            $body .= 'Email: ' . $senderemail . "\n";
            $body .= "Message:\n" . $message . "\n\n";

            $sent = mail( $mailTo, $subject, $body );

            if ($sent) {
                print("Success");
            }else {
                print("Failed");
            }
        }
    }
?>