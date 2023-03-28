
import { SmashDownloader } from "@smash-sdk/downloader";

const sd1 = new SmashDownloader({
    token: "Put your api key",
    transferId: "Put a transfer id here",
    path: "Path to file, ex: /dummyFiles/dummy.zip",
    password: "Put a password here", // this field corresponds to the password of the transfer
    //enableOverride: true, // support for override
});

sd1.download().then(downloadedItem => {
    console.log("Download", downloadedItem);
}).catch(error => {
    console.log("Error", error);
});
