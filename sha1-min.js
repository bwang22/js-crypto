sha1=function(v,u,s,d,k,x,w){function l(c,d,a){d="";for(a=8;a--;)d+=(c>>>a*4&15).toString(k);return d}return function(c){var t=0,a=0,i=[],m=1732584193,n=4023233417,o=2562383102,p=271733878,q=3285377520,b,f,g,h,e,r,j=[],c=unescape(encodeURIComponent(c));for(b=c[s];a<=b;)j[a>>2]|=(c[v](a)||w)<<8*(3-a++%4);for(;j[s]%k!=14;)j[u](0);for(j[u](b>>>29,b<<3&d);t<j[s];t+=k){for(a=-1;++a<80;)e=i[a-3]^i[a-8]^i[a-14]^i[a-k],i[a]=a<k?j[t+a]:e<<1|e>>>31;c=m;b=n;f=o;g=p;h=q;for(a=0;a<80;)e=c<<5|c>>>27,r=h+i[a]+1518500249,h=e+(b^f^g)+r+341275144,e=[e+(b&f|~b&g)+r,h,e+(b&f|b&g|f&g)+r+882459459,h+1535694389][0|a++/20],h=g,g=f,f=b<<30|b>>>2,b=c,c=e&d;m=m+c&d;n=n+b&d;o=o+f&d;p=p+g&d;q=q+h&d}return l(m)+l(n)+l(o)+l(p)+l(q)}}("charCodeAt","push","length",4294967295,16,24,128);