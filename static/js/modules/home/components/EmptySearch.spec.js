import EmptySearch from './EmptySearch.jsx';

it('renders correctly', () => {
    const wrapper = shallow(
        <EmptySearch/>
    );
    expect(wrapper).toMatchSnapshot();
})