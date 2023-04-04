
import { DownloaderOutput, SmashDownloader } from "@smash-sdk/downloader";

const sd1 = new SmashDownloader({
    token: "Put your Smash API key",
    transferId: "Put a transfer id here",
    path: "Path to file, ex: /dummyFiles/dummy.zip",
    //enableOverride: true, // support for override
});

sd1.download().then((downloadedItem: DownloaderOutput) => {
    console.log("Download", downloadedItem);
}).catch((error: unknown) => {
    console.log("Error", error);
});
