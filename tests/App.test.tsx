import { describe, it, expect } from 'vitest'
import App from '../src/App'

describe('App', () => {
  it('should be a function', () => {
    expect(typeof App).toBe('function')
  })

  it('should export default', () => {
    expect(App).toBeDefined()
  })

  it('should have name App', () => {
    expect(App.name).toBe('App')
  })
})