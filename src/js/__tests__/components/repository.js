import React from 'react'; // eslint-disable-line no-unused-vars
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({
  adapter: new Adapter(),
});
import renderer from 'react-test-renderer';

import { mockedGithubNotifications } from '../../__mocks__/mockedData';
import { RepositoryNotifications } from '../../components/repository';

const { shell } = require('electron');

jest.mock('../../components/notification');

describe('components/repository.js', function() {
  const props = {
    hostname: 'github.com',
    repo: mockedGithubNotifications,
    repoName: 'manosim/gitify',
    markRepoNotifications: jest.fn(),
  };

  beforeEach(() => {
    shell.openExternal.mockReset();
  });

  it('should render itself & its children', function() {
    const tree = renderer.create(<RepositoryNotifications {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it('should render itself & its children (logged in)', function() {
    const wrapper = shallow(<RepositoryNotifications {...props} />);

    expect(wrapper).toBeDefined();
    expect(wrapper.find('.octicon-check').length).toBe(1);

    wrapper.find('.info span').simulate('click');

    expect(wrapper.find('.info span').text()).toContain('gitify');
    expect(wrapper.find('.info span').text()).toContain('manosim');

    expect(shell.openExternal).toHaveBeenCalledTimes(1);
    expect(shell.openExternal).toHaveBeenCalledWith(
      'https://github.com/manosim/notifications-test'
    );
  });

  it('should mark a repo as read', function() {
    const wrapper = shallow(<RepositoryNotifications {...props} />);

    expect(wrapper).toBeDefined();
    expect(wrapper.find('.octicon-check').length).toBe(1);

    wrapper.find('.octicon-check').simulate('click');
    expect(props.markRepoNotifications).toHaveBeenCalledWith(
      'manosim/notifications-test',
      'github.com'
    );
  });
});
