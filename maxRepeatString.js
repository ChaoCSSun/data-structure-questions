function maxString(str) {
  if(str.length ){
    for(var i =0; i< str.length; i++) {
        let curString = str.subString(i, i+1);
        let lastString = str.subString(i+1, str.length);
  
        let p = curString.indexOf(lastString);
  
        if(p!= -1) {
            return curString + maxString(lastString);
        } else {
            return maxString(str.subString(i, p+1));
        }
    }
  } else {
      return ''
  }

}