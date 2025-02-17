import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

describe('App', () => {
  it('renders properly', async () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: []
    });

    const wrapper = mount(App, {
      global: {
        plugins: [router]
      }
    });

    expect(wrapper.find('.min-h-screen').exists()).toBe(true);
    expect(wrapper.find('.bg-white').exists()).toBe(true);
    expect(wrapper.findComponent({ name: 'ThemeButton' }).exists()).toBe(true);
  });
});
