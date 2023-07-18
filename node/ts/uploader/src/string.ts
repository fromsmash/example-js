
import { SmashUploader } from "@smash-sdk/uploader";

const su = new SmashUploader({ region: "eu-west-3", token: "Put your api key here" })
const files = [
    { name: "tree.png", content: "This is a first string" },
    { name: "folder1/tree.png", content: "This is a second string" },
    { name: "folder2/folder3/tree.txt", content: "This is a third string" },
];
su.upload({
    files,
}).then(transfer => {
    console.log("Transfer", transfer);
}).catch(error => {
    console.log("Error", error);
});