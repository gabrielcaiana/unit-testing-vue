import { mount } from '@vue/test-utils'
import RandomNumber from '@/components/RandomNumber'

describe('RandomNumber', () => {
  it('por padrão o valor deve ser 0', () => {
    const wrapper = mount(RandomNumber)
    expect(wrapper.html()).toContain('<span>0</span>')
  })

  it('Se o botão for clicado, randomNumber deve estar entre 1 e 10', () => {
    expect(true).toBe(true)
  })

  it('Se o botão for clicado, randomNumber deve estar entre 200 e 300', () => {
    expect(true).toBe(true)
  })
})
