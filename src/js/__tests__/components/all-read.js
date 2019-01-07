import React from 'react'; // eslint-disable-line no-unused-vars
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import AllRead from '../../components/all-read';

describe('components/all-read.js', function() {
  it('should render itself & its children', function() {
    spyOn(AllRead.prototype, 'componentDidMount').and.callThrough();

    const wrapper = mount(<AllRead />);

    expect(wrapper).toBeDefined();
    expect(AllRead.prototype.componentDidMount).toHaveBeenCalledTimes(1);
    expect(wrapper.find('h4').text()).toBe('No new notifications.');
  });
});
