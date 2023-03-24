
import { Link } from "@smash-sdk/link/10-2019";

const linkSdk = new Link({ token: "Put your Smash API key here" })

linkSdk.getTarget({
    targetId: 'url',
}).then(link => {
    console.log("Link", link);
}).catch(error => {
    console.log("Error", error);
});