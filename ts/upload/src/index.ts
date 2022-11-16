
import { SmashUploader } from "@smash-sdk/uploader";

const su = new SmashUploader({ region: "eu-west-3", token: "Put a api key here" })
const files = [
    "./dummyFiles/dummy1.png",
    "./dummyFiles/dummy2.png",
    "./dummyFiles/dummy3.txt",
];
su.upload({
    files,
    language: 'en', // available Language fr, en, it, de, pt, es. this property is used to translate emails when used
    title: 'my-transfer',
    description: 'my-description',
    password: 'my-password', //used to secure transfer access
    availabilityDuration: 86400, // beween 15 min and 1 month, unit in seconds
    customization: {
        logo: 'https://my-logo-url.com', // image url, recommended size 300 x 300
        background: 'https://my-background-url.com', //iamge url, recommended size 2000 x 1125, this also support vimeo url and youtube url
    },
    preview: 'Full', //Full or None is no preview is needed, default to Full
}).then(transfer => {
    console.log(transfer);
}).catch(error => {
    console.log(error);
});