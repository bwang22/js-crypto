sha1=function(b){function k(d,b,a){b="";for(a=8;a--;)b+=(d>>>a*4&15).toString(16);return b}return function(z){for(var r=0,a=0,j=[],l=1732584193,m=4023233417,n=2562383102,o=271733878,p=3285377520,e,g,h,i,s,f,q=[],d=unescape(encodeURIComponent(z)),c=d.length;a<=c;)q[a>>2]|=(d.charCodeAt(a)||128)<<8*(3-a++%4);d=(c>>6)*16+14;q[d++]=c>>>29;for(q[d++]=c<<3&b;r<d;r+=16){for(a=-1;++a<80;)f=j[a-3]^j[a-8]^j[a-14]^j[a-16],j[a]=a<16?~~q[r+a]:f<<1|f>>>31;c=l;e=m;g=n;h=o;i=p;for(a=0;a<80;)f=c<<5|c>>>27,i=i+j[a]+1518500249,f=[f+(e&g|~e&h)+i,s=f+(e^g^h)+i+341275144,f+(e&g|e&h|g&h)+i+882459459,s+1535694389][0|a++/20]&b,i=h,h=g,g=e<<30|e>>>2,e=c,c=f;l=l+c&b;m=m+e&b;n=n+g&b;o=o+h&b;p=p+i&b}return k(l)+k(m)+k(n)+k(o)+k(p)}}(4294967295);
