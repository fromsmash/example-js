
import { SmashUploader } from "@smash-sdk/uploader";

const su = new SmashUploader({ region: "eu-west-3", token: "Put your api key here" })
const files = [
    { name: "text.txt", content: "This is a first string" },
    { name: "folder1/text.txt", content: "This is a second string" },
    { name: "folder2/folder3/text.txt", content: "This is a third string" },
];
su.upload({
    files,
}).then(transfer => {
    console.log("Transfer", transfer);
}).catch(error => {
    console.log("Error", error);
});