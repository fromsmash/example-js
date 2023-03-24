import { DownloaderOutput, SmashDownloader } from "@smash-sdk/downloader";

const sd1 = new SmashDownloader({
    token: "Put  Smash API key here",
    url: "Smash url like https://fromsmash.com/my-smash or https://my-domain.fromsmash.com/my-smash-on-subdomain",
    path: "Path to file, ex: ./dummyFiles/dummy.zip",
    //enableOverride: true, // support for override
});

sd1.download().then((downloadedItem: DownloaderOutput) => {
    console.log("Download", downloadedItem);
}).catch(error => {
    console.log("Error", error);
});
