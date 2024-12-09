
import { SmashDownloader } from "@smash-sdk/downloader";
import { GetTransferFilePreviewOutput, Transfer } from "@smash-sdk/transfer/01-2024";

const token = "Put your Smash API key";

async function getTransferFile(transferId: string, fileId: string): Promise<GetTransferFilePreviewOutput['file']> {
    const transferSdk = new Transfer({
        token,
        region: "eu-west-3",
    });
    const { file } = await transferSdk.getTransferFilePreview({ transferId, fileId });
    return file;
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

async function download(transferId: string, fileId: string) {
    const file = await getTransferFile(transferId, fileId);
    await downloadFile({ transferId, fileId: file.id, fileName: file.name });
}

download("Put a transfer id here", "Put a file id here").then(() => {
    console.log("Download completed");
}).catch((error) => {
    console.error("Error", error);
});
