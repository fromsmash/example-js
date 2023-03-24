
import * as fs from 'fs'
import { SmashDownloader } from "@smash-sdk/downloader";

const stream = fs.createWriteStream("./dummyFiles/dummy1.zip", { flags: "w" });

const sd3 = new SmashDownloader({
    token: "Put your Smash API key here",
    transferId: "your transferId",
    //url: "or url",
    stream,
});

sd3.download().then(downloadedItem => {
    console.log("Download", downloadedItem);
}).catch(error => {
    console.log("Error", error);
});

