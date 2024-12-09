
import { SmashDownloader } from "@smash-sdk/downloader";
import { ListTransferFilesPreviewOutput, Transfer } from "@smash-sdk/transfer/01-2024";
import Bluebird from "bluebird";

const token = "Put your Smash API key";

async function listTransferFiles(transferId: string): Promise<ListTransferFilesPreviewOutput['files']> {
    const transferSdk = new Transfer({
        token,
        region: "eu-west-3",
    });
    const files = await transferSdk.listTransferFilesPreview({ transferId });
    while (files.next) {
        const nextFiles = await transferSdk.listTransferFilesPreview({ transferId, start: files.next });
        files.files.push(...nextFiles.files);
        files.next = nextFiles.next;
    }
    return files.files;
}

async function downloadFile({ transferId, fileId, fileName }: { transferId: string, fileId: string, fileName: string }) {
    const downloader = new SmashDownloader({
        token,
        transferId,
        fileId,
        path: `./${fileName}`, // path to save the file
    });
    const file = await downloader.download();
    return file;
}

async function download(transferId: string) {
    const files = await listTransferFiles(transferId);
    await Bluebird.map(files, async (file) => {
        await downloadFile({ transferId, fileId: file.id, fileName: file.name });
    }, { concurrency: 5 });
}

download("Put a transfer id here").then(() => {
    console.log("Download completed");
}).catch((error) => {
    console.error("Error", error);
});
