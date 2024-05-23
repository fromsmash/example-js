
import { SmashUploader, TransferOutput, CreateTransferParameters } from "@smash-sdk/uploader";

const su = new SmashUploader({ region: "eu-west-3", token: "Put your Smash API key here" });
const uploadInput: CreateTransferParameters = {
    files: [
        "./dummyFiles/dummy1.png",
        "./dummyFiles/dummy2.png",
        "./dummyFiles/dummy3.txt",
    ]
};
su.upload(uploadInput).then((transfer: TransferOutput) => {
    console.log("Transfer", transfer);
}).catch((error: unknown) => {
    console.log("Error", error);
});