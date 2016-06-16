function FindProxyForURL(url, host)
 {
 if (url.substring(0, 6) == "httph:") {
 return "PROXY bj-unicom.exp.home.jht.io:80";
 }
 else if (url.substring(0, 6) == "https:") {
 return "PROXY bj-cmcc.exp.home.jht.io:8080";
 }
 }
function FindProxyForURL(url, host)
 {
 if (isPlainHostName(host))
 return "DIRECT";
 }
function FindProxyForURL(url, host)
 {
 if (dnsResolve(host) == "162.159.211.15") { // = http://bj-cmcc.exp.home.jht.io
 return "PROXY bj-cmcc.exp.home.jht.io:8080";
 }
 {
 else if (dnsResolve(host) == "162.159.210.15") { // = http://bj-cmcc.exp.home.jht.io
 return "PROXY bj-cmcc.exp.home.jht.io:8080";
 }
 }
function FindProxyForURL(url, host)
 {
 if (url.substring(0, 5) == "http:") {
 return "DIRECT";
 }
 }
