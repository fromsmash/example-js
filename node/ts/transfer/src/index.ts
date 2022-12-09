
import { Transfer } from "@smash-sdk/transfer/10-2019";

const transferSdk = new Transfer({ region: "eu-west-3", token: "Put your api key here" })

transferSdk.getTransfer({
    transferId: 'transferId'
}).then(transfer => {
    console.log("Transfer", transfer);
}).catch(error => {
    console.log("Error", error);
});