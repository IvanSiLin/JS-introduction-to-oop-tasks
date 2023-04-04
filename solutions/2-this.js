// BEGIN
export const make = (numer = 0, denom = 1) =>{
    let privateNumer = numer;
    let privateDenom = denom;
    
    function gcd(a, b) {
      if (b === 0) {
        return a;
      }
      return gcd(b, a % b);
    }
    
    function reduce() {
      const g = gcd(privateNumer, privateDenom);
      privateNumer /= g;
      privateDenom /= g;
    }
  
    return {
      setNumer(n) {
        privateNumer = n;
        reduce();
      },
      setDenom(d) {
        privateDenom = d;
        reduce();
      },
      getNumer() {
        return privateNumer;
      },
      getDenom() {
        return privateDenom;
      },
      toString() {
        return `${privateNumer}/${privateDenom}`;
      },
      add(other) {
        const newNumer = privateNumer * other.getDenom() + privateDenom * other.getNumer();
        const newDenom = privateDenom * other.getDenom();
        return make(newNumer, newDenom);
      },
    };
  }
  
  export default make;
  
// END