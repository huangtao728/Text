function FindProxyForURL(url, host)
 {
 if (url.substring(0, 5) == "http:") {
 return "DIRECT";
 }
 else if (url.substring(0, 6) == "https:") {
 return "PROXY bj-cmcc.exp.home.jht.io:80";
 }
 }
