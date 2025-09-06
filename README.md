All specified code files are contained in src/components and assets are to be placed in src/assets. 

This is a mock website for Wood Hudson. Right now it contains a landing page with an tabs at the top that either scroll to the corresponding section on the landing page (like about us) or navigate to a separate page (Like contact us). 
To the left of the tabs is a place to put the logo. This can be done by putting a file called 'logo.png' where a file currently exists called 'logo.png' in src/assets. 
Below that is a Hero slide frame with a donate now button (detailed instructions below). The slides you want can be put into the rotation by replacing slide1.jpg, slide2.jpg, and slide3.jpg in src/assets with files of the same name.
The About Us section is below. The desired text in the about us section can be inputted by going to the file AboutUs.vue and replacing the giberish text between the tags <p> and </p>. (lines 5-8)
The Contact Us page is currently just a mock up. A back end to the website will need to be set up to send emails to a specified address (outside of the scope for 7 hours). A web developer should be able to figure out how to do this using Node.js. 
There is a footer at the bottom, this can be configured by replacing all the mock information in ContactFooter.vue with the corresponding information that are always contained between two tags (such as <p> and </p>).
There is a people section that navigates to a different page to showcase all the people that work for the non profit. This page can similarly be configured in PeoplePage.vue.


Steps to utilize the paypal functionality:
1) Create a PayPal Developer Account if you do not already have one. Navigate the Dashboard -> My Apps & Credentials and choose 'Sandbox' for testing purposes and 'Live' when your ready to accept real payments.
2) To create the Paypal App click 'Create App'. After creation you'll be given a Client ID and a Secret. We do not need to worry about the Secret now.
3) In the source code find this line in DonatePage.vue
script.src = "https://www.paypal.com/sdk/js?client-id=YOUR_REAL_CLIENT_ID&currency=USD";
and replace YOUR_REAL_CLIENT_ID with the sandbox client ID for testing or the live Client ID for real payment.
4) Use the PayPal sandbox accounts to simulate payments and test functionality. Ensure that the paypal button appear correctly and donations process. Confirm that the onApprove callback runs (it shows a thank you alert)
5) Go live by replacing the sandbox ID with the live ID, test with small donation to confirm.
6) Notes: No credit card or sensitive information is ever handled by your site, it all processes securely through paypal.
