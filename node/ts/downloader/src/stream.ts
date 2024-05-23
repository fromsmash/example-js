
import * as fs from 'fs'
import { DownloaderOutput, SmashDownloader } from "@smash-sdk/downloader";

const stream = fs.createWriteStream("./dummyFiles/dummy1.zip", { flags: "w" });

const sd3 = new SmashDownloader({
    token: "Put your Smash API key here",
    transferId: "your transferId",
    //url: "or url",
    stream,
});

sd3.download().then((downloadedItem: DownloaderOutput) => {
    console.log("Download", downloadedItem);
}).catch((error: unknown) => {
    console.log("Error", error);
});

