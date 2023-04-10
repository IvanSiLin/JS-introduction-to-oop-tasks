// BEGIN
export const make = (numerator = 0, denominator = 1) =>{
  
    let privateNumerator = numerator;
    let privateDenominator = denominator;
    
    function gcd(a, b) {

      if (b === 0) {

        return a;
      }

      return gcd(b, a % b);
    }
    
    function reduce() {

      const g = gcd(privateNumerator, privateDenominator);
      privateNumerator /= g;
      privateDenominator /= g;
    }
  
    return {

      setNumer(n) {

        privateNumerator = n;
        reduce();
      },
      setDenom(d) {

        privateDenominator = d;
        reduce();
      },
      getNumer() {
        
        return privateNumerator;
      },
      getDenom() {

        return privateDenominator;
      },
      toString() {

        return `${privateNumerator}/${privateDenominator}`;
      },
      add(next) {

        const newNumerator = privateNumerator * next.getDenom() + privateDenominator * next.getNumer();
        const newDenominator = privateDenominator * next.getDenom();
        return make(newNumerator, newDenominator);
      },
    };
  }
  
  export default make;
  
// END