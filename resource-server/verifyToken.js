const accessToken = 'ya29.a0AcM612z3GtJqzPO_vWkfyTh7-ch19n9G4hciz8Dc1_8IhFxMn7Os4ZQsiNib2mD7RBi4Zw5aoKBQzSzOctzXD-DEUZKwGfdPW0rftzJbl7GedDH9j63WsukSniBK-wsVWZ7pX7PiyGZWfoN2I_z7Gf3xOKV-_LhoYbCPTq1caCgYKAQsSARASFQHGX2MidpDc5NSxc0n-LtYowSp-KQ0175'

/**
 * Verify a given access token with Google's token info endpoint.
 * @param {string} token - The access token to verify
 * @returns {Promise<Object>} - The response from the token info endpoint
 * @throws {Error} - If the token is invalid or the request fails
 */
async function verifyAccessToken(token) {
    try {
        // Google's token info endpoint
        const response = await fetch(`https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=${token}`).then(res => res.json())
        return response;
    } catch (error) {
        throw error;
    }
}

verifyAccessToken(accessToken)
    .then(tokenInfo => {
        console.log('Access Token Info:', tokenInfo);
    })
    .catch(error => {
        console.error('Error verifying access token:', error);
    });