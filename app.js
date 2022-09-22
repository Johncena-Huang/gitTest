const express = require("express");
const fs = require("fs");
const https = require("https");
const http = require("http");
const app = express();

http.createServer(app).listen(80);
https.createServer(options, app).listen(443);
