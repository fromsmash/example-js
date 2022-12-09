
import * as fs from 'fs'
import { SmashDownloader } from "@smash-sdk/downloader";

const sd1 = new SmashDownloader({
    token: "Put your api key",
    transferId: "Put a transfer id here",
    path: "Path to file, ex: /dummyFiles/dummy.zip",
    //enableOverride: true, // support for override
});

sd1.download().then(downloadedItem => {
    console.log("Download", downloadedItem);
}).catch(error => {
    console.log("Error", error);
});
