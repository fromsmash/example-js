
import { GetTargetInput, GetTargetOutput, Link } from "@smash-sdk/link/10-2019";

const linkSdk = new Link({ token: "Put your Smash API key here" })

const params: GetTargetInput = {
    targetId: 'url',
};

linkSdk.getTarget(params).then((link: GetTargetOutput) => {
    console.log("Link", link);
}).catch((error: unknown) => {
    console.log("Error", error);
});