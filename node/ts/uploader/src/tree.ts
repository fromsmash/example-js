
import { SmashUploader } from "@smash-sdk/uploader";

const su = new SmashUploader({ region: "eu-west-3", token: "Put your Smash API key here" })
const upladInput: UploadInput = {
    files: [
        { name: "tree.png", file: "./dummyFiles/dummy1.png" },
        { name: "folder1/tree.png", file: "./dummyFiles/dummy2.png" },
        { name: "folder2/folder3/tree.txt", file: "./dummyFiles/dummy3.txt" },
    ]
};
su.upload(upladInput).then((transfer: UploadOutput) => {
    console.log("Transfer", transfer);
}).catch((error: unknown) => {
    console.log("Error", error);
});