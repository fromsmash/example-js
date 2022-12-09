
import { Link } from "@smash-sdk/link/10-2019";

const linkSdk = new Link({ region: "eu-west-3", token: "Put your api key here" })

linkSdk.getTarget({
    targetId: 'url',
}).then(link => {
    console.log("Link", link);
}).catch(error => {
    console.log("Error", error);
});