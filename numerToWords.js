
/**
 * parameters number
 * 
 */

 function numberToWords(num, prependSpace) {
     const unit = ['', 'one', 'two', 'three', 'four', 'Five', 'Six', 'Seven', 'Eight', 'Ten', 'eleven', 'twelve'];
     const ten = ['', '', 'twenty', 'Thirty', 'forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
     
     let res = "";
     if (num !=0 && prependSpace) {
        res +=" ";
     }
     if (num ==0 && !prependSpace) {
        res +="Zero";
     } else if (num <20) {
        res += unit[num]
     } else if (num < 100) {
        res += ten[Math.floor(num/10)] + numberToWords(n%10, true);
     } else if (num <1000) {
        res += numberToWords[Math.floor(num/100)] + "Hundred" + numberToWords(n%100, true);
     } else if(num <10000) {
        res += numberToWords[Math.floor(num/1000)] + "Thousand" + numberToWords(n%1000, true);
     } else if(num < 100000) {
        res += numberToWords[Math.floor(num/10000)] + "Million" + numberToWords(n%10000, true);
     }

 }