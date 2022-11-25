
import { SmashUploader } from "@smash-sdk/uploader";

const su = new SmashUploader({ region: "eu-west-3", token: "Put your api key here" })
const files = [
    "./dummyFiles/dummy1.png",
    "./dummyFiles/dummy2.png",
    "./dummyFiles/dummy3.txt",
];
su.upload({
    files,
}).then(transfer => {
    console.log("Transfer", transfer);
}).catch(error => {
    console.log("Error", error);
});