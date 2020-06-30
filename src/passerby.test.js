import Passerby from '../src/passerby'

describe('Passerby', () => {
  test('current position', () => {
    const passerby = new Passerby(1400);

    expect(passerby.position.x).toEqual(1400);
  })

  test('draw function calls drawImage function of ctx object', () => {
    const passerby = new Passerby();
    var ctx = {
      drawImage: function () {
        return 'changed'
      }
    };
    const spy = jest.spyOn(ctx, 'drawImage');
    passerby.draw(ctx)
    expect(spy).toHaveBeenCalledTimes(1);
  })
})
