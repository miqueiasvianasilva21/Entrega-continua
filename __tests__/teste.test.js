
const kgToLbs = (kg) =>{
    const lbs = kg * 2.20462;
    return lbs;
}

const lbsToKg = (lbs) =>{
    const kg = lbs / 2.20462;
    return kg;
}



describe('Teste kgToLbs', () => {
    test('Deve converter 0 kg para 0 lbs', () => {
      expect(kgToLbs(0)).toBe(0);
    });
  
    test('Deve converter 70 kg para aproximadamente 154.3234 lbs', () => {
      expect(kgToLbs(70)).toBeCloseTo(160.3234, 3);
    });
    test('Deve converter 10 kg para aproximadamente 22.0462 lbs', () => {
        expect(kgToLbs(10)).toBeCloseTo(22.0462, 3);
      });
  });
  
  
describe('Teste lbsToKg', () => {
    test('Deve converter 0 lbs para 0 kg', () => {
      expect(lbsToKg(0)).toBe(0);
    });
  
    test('Deve converter 154 lbs para aproximadamente 69.853 kg', () => {
      expect(lbsToKg(154)).toBeCloseTo(69.853, 3);
    });
  });


  
  