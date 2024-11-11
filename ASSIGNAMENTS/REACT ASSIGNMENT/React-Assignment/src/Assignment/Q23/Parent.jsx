import First from './First'
import Second from './Second'
import Third from './Third'

function Parent() {
	return(
		<>
			Welcome to Parent Component to display all 3 Child below
			<br /><br />
			<First />
			<br />
			<Second />
			<br />
			<Third />
		</>
	);
}

export default Parent