console.log("Bienvenue dans WebPack qui est bien chiant!");

import moment from "moment"
import "bootstrap"
import "jquery"

require("../css/main.scss");

console.log(moment().startOf('day').fromNow());