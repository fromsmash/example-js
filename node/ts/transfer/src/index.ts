
import { GetTransferOutput, Transfer, errors } from "@smash-sdk/transfer/10-2019";

const transferSdk = new Transfer({ region: "eu-west-3", token: "Put your Smash API key here" })

transferSdk.getTransfer({
    transferId: 'transferId'
}).then((transfer: GetTransferOutput) => {
    console.log("Transfer", transfer);
}).catch((error: unknown) => {
    if (error instanceof errors.GetTransferError.NotFoundError) {
        console.log("Transfer not found.", error);
    } else {
        console.log("Error", error);
    }
});