import React from 'react'; // eslint-disable-line no-unused-vars
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({
  adapter: new Adapter(),
});

import LogoWhite from '../../../components/logos/white';

describe('components/logos/white.js', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<LogoWhite />);

    expect(tree).toMatchSnapshot();
  });

  it('should click on the logo', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<LogoWhite onClick={onClick} />);

    expect(wrapper).toBeDefined();

    wrapper.find('svg').simulate('click');

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
