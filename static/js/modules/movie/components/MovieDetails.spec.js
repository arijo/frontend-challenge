import MovieDetails from './MovieDetails.jsx';

it('renders correctly', () => {
    const wrapper = shallow(
        <MovieDetails/>
    );
    expect(wrapper).toMatchSnapshot();
})