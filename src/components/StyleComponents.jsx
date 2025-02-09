import styled from "styled-components";

const StyleComponents = () => {
  const Section = styled.section`
    background: #bf4f74;
    width: 1000px;
    height: 1000px;
    border-radius: 3px;
    border: none;
    color: white;
  `;
  const Title = styled.h1`
    font-size: 40px;
    color: green;
  `;

  const Button = styled.button.attrs((props) => ({
    type: "submit",
    value: "Кнопка",
    disabled: "true",
  }))`
    width: 200px;
    height: 100px;
    display: block;
  `;

  const Input = styled.input.attrs((props) => ({
    type: "number",
    name: "input",
  }))`
    border-radius: 10px;
    border: 1px solid red;
    display: block;
    width: 200px;
    padding: ${(props) => props.$padding || "15px"};
  `;

  const Input2 = styled(Input)`
    border-radius: 50%;
    color: red;
    background-color: blueviolet;
  `;

  return (
    <Section>
      <Title>StyleComponents</Title>
      <Input $padding="80px" />
      <Input2 />
      <Button />
    </Section>
  );
};

export default StyleComponents;
