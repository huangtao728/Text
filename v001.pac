function FindProxyForURL(url, host)
 {
 if (shExpMatch(host, "mp.weixin.qq.com")) {
 return "PROXY forbid.jht.io:80";
 }
 else if (shExpMatch(host, "*.v2ex.com")) {
 return "DIRECT";
 }
 }
