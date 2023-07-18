
import { SmashUploader } from "@smash-sdk/uploader";

const su = new SmashUploader({ region: "eu-west-3", token: "Put your api key here" })
const files = [
    { name: "buffer.txt", content: Buffer.from("This is a first string") },
    { name: "folder1/buffer.txt", content: Buffer.from("This is second string") },
    { name: "folder2/folder3/buffer.txt", content:  Buffer.from("This is a third string") },
];
su.upload({
    files,
}).then(transfer => {
    console.log("Transfer", transfer);
}).catch(error => {
    console.log("Error", error);
});