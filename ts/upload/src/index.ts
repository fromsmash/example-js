
import { SmashUploader } from "smash-uploader";

const su = new SmashUploader({ region: "eu-west-3", token: "Put a api key here" })
const files = [
    "./dummyFiles/dummy1.png",
    "./dummyFiles/dummy2.png",
    "./dummyFiles/dummy3.txt",
];
su.upload({ files }).then(transfer => {
    console.log(transfer);
}).catch(error => {
    console.log(error);
});