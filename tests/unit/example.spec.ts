import { shallowMount } from '@vue/test-utils';
import PersonalData from '@/components/PersonalData';

describe('PersonalData.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(PersonalData, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
