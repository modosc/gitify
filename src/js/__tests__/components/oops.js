import React from 'react'; // eslint-disable-line no-unused-vars
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({
  adapter: new Adapter(),
});
import Oops from '../../components/oops';

function setup() {
  const props = {};
  const wrapper = shallow(<Oops {...props} />);

  return {
    props: props,
    wrapper: wrapper,
  };
}

describe('components/oops.js', function() {
  it('should render itself & its children', function() {
    const { wrapper } = setup();

    expect(wrapper).toBeDefined();
    expect(wrapper.find('h2').text()).toBe('Oops something went wrong.');
  });
});
