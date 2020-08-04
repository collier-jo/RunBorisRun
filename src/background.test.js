
import Background from '../src/background'

describe('Background', () => {

  test('it creates the background Image', () => {
    var image = new Background
    expect(image.background).toBeInstanceOf(Image)
  })

})
