import { useSelector } from "react-redux";
import styled from "styled-components";
export const Samples = () => {
	const samples = useSelector((state) => state?.sampleData);
	return <Container>{samples?.samples?.map((s) => s.SampleNo)}</Container>;
};
const Container = styled.div``;
