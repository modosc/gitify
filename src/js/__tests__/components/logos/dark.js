import React from 'react'; // eslint-disable-line no-unused-vars
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({
  adapter: new Adapter(),
});

import LogoDark from '../../../components/logos/dark';

describe('components/logos/dark.js', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<LogoDark />);

    expect(tree).toMatchSnapshot();
  });

  it('should click on the logo', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<LogoDark onClick={onClick} />);

    expect(wrapper).toBeDefined();

    wrapper.find('svg').simulate('click');

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
