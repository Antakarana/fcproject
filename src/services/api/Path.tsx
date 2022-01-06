/* Request Types --start-- */
const requestTypeGET: string = 'GET';
/* --end-- */

const devApiURL: string = 'https://api.spacexdata.com/';

const mainURL = devApiURL;

/* API URLs Extensions --start-- */
const extendMain: string = 'v4/';
const extendRockets: string = 'rockets';
const extendCrew: string = 'crew';
/* --end-- */

export {mainURL, requestTypeGET, extendMain, extendCrew, extendRockets};