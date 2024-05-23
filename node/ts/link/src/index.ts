
import { GetTargetInput, GetTargetOutput, Link, errors } from "@smash-sdk/link/10-2019";

const linkSdk = new Link({ token: "Put your Smash API key here" })

const params: GetTargetInput = {
    targetId: 'url',
};

linkSdk.getTarget(params).then((link: GetTargetOutput) => {
    console.log("Link", link);
}).catch((error: unknown) => {
    if (error instanceof errors.GetTargetError.NotFoundError) {
        console.log("Transfer not found.", error);
    } else {
        console.log("Error", error);
    }
});