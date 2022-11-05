import Output from './Components/output';

function App() {

  const color_code =[
    {
      color_name: "PINK",
      color_code : "#FF6663",
    },
    {
      color_name: "GREY",
      color_code : "#333333",
    },
    {
      color_name: "BLACK",
      color_code : "#000000",
    },
    {
      color_name: "GREEN",
      color_code : "#38BB14",
    },
    {
      color_name: "RED",
      color_code : "#C90B0B",
    },
    {
      color_name: "ORANGE",
      color_code : "#FF8000",
    },
    {
      color_name: "YELLOW",
      color_code : "#FFF500",
    },
    {
      color_name: "LIGHT GREY",
      color_code : "#CCCCCC",
    },
    {
      color_name: "PURPLE",
      color_code : "#7E41A2",
    },
    {
      color_name: "BROWN",
      color_code : "#C14911",
    },
  ];
  
  return (
    <>
    <Output color_picker={color_code} />
    </>
  
  );
}

export default App;