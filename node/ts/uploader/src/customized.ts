
import { SmashUploader } from "@smash-sdk/uploader";

const su = new SmashUploader({ region: "eu-west-3", token: "Put your Smash API key here" })
const uploadInput: UploadInput = {
    files: [
        "./dummyFiles/dummy1.png",
        "./dummyFiles/dummy2.png",
        "./dummyFiles/dummy3.txt",
    ],
    language: 'en', // available Language fr, en, it, de, pt, es. this property is used to translate emails when used
    title: 'my-transfer',
    description: 'my-description',
    //teamId: "*****-******-******-********-*7", // This can be omitted, enable the use of subdomain.
    password: 'my-password', //used to secure transfer access
    availabilityDuration: 86400, // between 15 min and 1 month, unit in seconds
    customization: {
        logo: 'https://my-logo-url.com', // https image url, recommended size 300 x 300
        background: 'https://my-background-url.com', // https image url, recommended size 2000 x 1125, this also support vimeo url and youtube url
    },
    preview: 'Full', //Full or None is no preview is needed, default to Full
};

su.upload(uploadInput).then((transfer: UploadOutput) => {
    console.log("Transfer", transfer);
}).catch((error: unknown) => {
    console.log("Error", error);
});