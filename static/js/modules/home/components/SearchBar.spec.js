import SearchBar from './SearchBar.jsx';

it('renders correctly', () => {
    const wrapper = shallow(
        <SearchBar/>
    );
    expect(wrapper).toMatchSnapshot();
})