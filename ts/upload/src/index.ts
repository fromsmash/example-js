
import { SmashUploader } from "@smash-sdk/uploader";

const su = new SmashUploader({ region: "eu-west-3", token: "Put a api key here" })
const files = [
    "./dummyFiles/dummy1.png",
    "./dummyFiles/dummy2.png",
    "./dummyFiles/dummy3.txt",
];
su.upload({
    files,
    language: 'en',
    title: 'my-transfer',
    description: 'my-description',
    password: 'my-password',
    availabilityDuration: 86400,
    customization: {
        logo: 'https://my-logo-url.com',
        background: 'https://my-background-url.com',
    },
    notificationType: 'All',
    preview: 'Full',
    delivery: {
        type: 'Link',
        sender: {
            name: 'Firstname Lastname',
            email: 'email@test.com',
        },
        receivers: [
            'email1@test.com',
            'email2@test.com'
        ],
    },
}).then(transfer => {
    console.log(transfer);
}).catch(error => {
    console.log(error);
});