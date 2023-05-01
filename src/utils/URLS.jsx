// if in localhost http is used, else https is used

const https = window.location.protocol === "https:";

const BASE_URL = https ? "https://ws.audioscrobbler.com/2.0/" : "http://ws.audioscrobbler.com/2.0/";

export default BASE_URL;
