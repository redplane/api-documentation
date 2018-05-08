const path = require('path');
const dist = path.resolve('src/dist');
const clientId = 'af09bb0f9d0abd3a341e93748caea4ae7a92a976925708708d693179b8a7a2e1';
const clientSecret = '0625b9e63ae65dd0e1b1337fafd0ccf68679cf99134316053f6d2d306104d34e';

// Import bitballoon library.
const bitBalloon = require("bitballoon");

// Import node-zip
const zipdir = require('zip-dir');

// Create bit-balloon client.
let bitBalloonClient = bitBalloon.createClient({client_id: clientId, client_secret: clientSecret});

bitBalloonClient
    .authorizeFromCredentials((error, accessToken) => {
        if (error)
            return console.log(error);

        console.log(accessToken);
        // bitBalloonClient.site('5c98ba0e-6e3a-466e-8d86-21c821ecead8', (error, site) => {
        //     if (error)
        //         return console.log(error);
        //
        //     let pathZip = `src/dist/dist.zip`;
        //     zipdir(dist, { saveTo: '~/src/dist.zip' }, function (err, buffer) {
        //         // `buffer` is the buffer of the zipped file
        //         // And the buffer was saved to `~/myzip.zip`
        //         site.createDeploy({zip: '/src/dist.zip'}, (error, deploy) => {
        //             if (error)
        //                 return console.log("Error updating site %o", error);
        //
        //             deploy.waitForReady(function (err, deploy) {
        //                 if (err) return console.log("Error updating site %o", err);
        //                 console.log("Site redeployed");
        //             });
        //         });
        //     });
        //
        //
        //
        //     // console.log(site);
        // });

        // // Initialize deploy options.
        // let oDeployOptions = {
        //     access_token: accessToken,
        //     site_id: '5c98ba0e-6e3a-466e-8d86-21c821ecead8',
        //     dir: 'src/dist'
        // };
        //
        // console.log(accessToken);
        //
        // bitBalloon.deploy(oDeployOptions, (error, deploy) => {
        //     if (error) {
        //         console.log(deploy);
        //         return console.log(error);
        //     }
        //     console.log('Deployment completed');
        // });

        return accessToken;
    });

