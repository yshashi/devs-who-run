import { mount } from '@vue/test-utils';
import About from './about.vue';

describe('About', () => {
  it('renders properly', () => {
    const wrapper = mount(About, {});
    expect(wrapper.text()).toContain('Welcome to About');
  });
});
