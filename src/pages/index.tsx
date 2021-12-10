import { NextPage } from 'next';

import CustomHeader from '../components/CustomHeader';

const Index: NextPage = () => {
	return (
		<>
			<CustomHeader />

			<main className="min-h-screen flex justify-center items-center">hi</main>
		</>
	);
};

export default Index;
