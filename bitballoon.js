const path = require('path');
const dist = path.resolve('src/dist');
const clientId = 'af09bb0f9d0abd3a341e93748caea4ae7a92a976925708708d693179b8a7a2e1';
const clientSecret = '0625b9e63ae65dd0e1b1337fafd0ccf68679cf99134316053f6d2d306104d34e';

// Import bitballoon library.
const bitBalloon = require("bitballoon");
let bitBalloonClient = bitBalloon.createClient({client_id: clientId, client_secret: clientSecret});

bitBalloonClient
    .authorizeFromCredentials((error, accessToken) => {
        if (error)
            return console.log(error);

        // Initialize deploy options.
        let oDeployOptions = {
            access_token: accessToken,
            site_id: '5c98ba0e-6e3a-466e-8d86-21c821ecead8',
            dir: dist
        };

        console.log(accessToken);

        bitBalloon.deploy(oDeployOptions, (error, deploy) => {
            if (error) {
                console.log(deploy);
                return console.log(error);
            }
            console.log('Deployment completed');
        });

        return accessToken;
    });

