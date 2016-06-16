function FindProxyForURL(url, host)
 {
 if (shExpMatch(host, "raw.jht.io")) {
 return "PROXY bj-cmcc.exp.home.jht.io:80";
 }
 else if (shExpMatch(host, "*.v2ex.com")) {
 return "DIRECT";
 }
 else if (url.substring(0, 5) == "http:") {
 return "DIRECT";
 }
 else if (url.substring(0, 6) == "https:") {
 return "PROXY bj-cmcc.exp.home.jht.io:80";
 }
 }
