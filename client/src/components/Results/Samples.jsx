import { useSelector } from "react-redux";
import styled from "styled-components";

export const Samples = () => {
	const { samples } = useSelector((state) => state.sampleData);
	samples.reverse();
	return (
		<Container>
			{samples.map((sample, i) => {
				return (
					<div
						key={i}
						className="sample"
					>
						{sample.Comments}
					</div>
				);
			})}
		</Container>
	);
};
const Container = styled.div``;
