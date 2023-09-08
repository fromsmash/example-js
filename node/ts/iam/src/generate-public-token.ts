
import { Iam } from "@smash-sdk/iam/10-2019";

// This example shows how to generate a public token when you want to expose your Smash integration in a secure way, for example on a public website.
// A public token is a token that can be used to authenticate a user on Smash without having to provide a secret key.
// It is a token that can be exposed publicly without compromising the security of your integration.
// We recommend to scope the token to the IP address of the user that is using your integration, to prevent token theft.

const token = "Put your api key here"; // The API key you want to use to generate the public token.
const iamSdk = new Iam({ region: "eu-west-3", token });

// First, you need to decode the token to get the user id that correspond to the private key you previously generated.
iamSdk.decodeToken(token).then(res => {
    // Then, you can create a public token for this user.
    iamSdk.createUserToken({
        userId: res.id, // (Required) The user id you want to create a token for.
        ip: "The IP address you want to restrict the token to.", // (Optional) IP address should follow IPV4 or IPV6 address format.
        scope: "IP", // (Optional) Options are 'None' or 'IP'. Choose 'IP' if you want to restrict the token to the IP address you provided.
        refreshTokenDuration: "1d", // (Optional) Duration notation follows the format : number + unit. Units are 's' for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks, 'M' for months, 'y' for years.
        tokenDuration: "1d", // (Optional) Duration notation follows the format : number + unit. Units are 's' for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks, 'M' for months, 'y' for years.
    }).then(res => {
        const { user } = res;
        const { token } = user; // The public token you just created.
    }).catch(console.error);
}).catch(console.error);
