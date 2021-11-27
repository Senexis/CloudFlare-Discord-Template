# CloudFlare-Discord-Template
A working template using [glenstack's Discord module](https://github.com/glenstack/glenstack/tree/master/packages/cf-workers-discord-bot) for CloudFlare Worker.

## Setup
To prevent running into issues where the globals are not defined (a current known issue at CloudFlare?), it's recommended to set up the CloudFlare worker in the following manner:
- Ensure the `wrangler.toml` file is set up with your account ID and other CloudFlare Worker details and preferences.
- [Create an application in Discord](https://discord.com/developers/applications), a bot user is NOT required for this to work and will not be used.
- Ensure you have Wrangler installed, and are logged in and have a valid API key set for it.
- On the CloudFlare Worker page on the [CloudFlare Dashboard](https://dash.cloudflare.com/), create a Worker with the name you plan to use (ex. `cloudflare-discord-template`).
- Clone the repository and run `npm i`.
- Run `wrangler secret put <name>` for each of the secrets (APPLICATION_ID, APPLICATION_SECRET, PUBLIC_KEY).
  - Note: It's important you do this BEFORE your first publish, as otherwise you might run into an error similar to `Uncaught ReferenceError: APPLICATION_ID is not defined`.
  - Note: A common mistake would be to use a bot token instead of the application secret for the `APPLICATION_SECRET` variable, to be clear; this method does NOT require a bot user. The application secret can be found on the OAuth2 page of your Discord application.
- Run `wrangler publish`. If everything goes correctly, you should be able to go to the URL displayed in console to go to your application's authorization page on Discord.
- Once the project is published, make sure to enter the interaction URL in your Discord Application, which is the same as the console URL used in the previous step. Make sure you append `/interaction` to the worker's URL.
- Make sure to go to your worker's URL with `/setup` appended to it to set up the slash commands in Discord. This will be required every update. This step is included in the GitHub Workflow for deploying the app on `main` branch pushes.
