import SearchResults from './SearchResults.jsx';

it('renders correctly', () => {
    const wrapper = shallow(
        <SearchResults/>
    );
    expect(wrapper).toMatchSnapshot();
})