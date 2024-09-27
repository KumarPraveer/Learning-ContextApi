import Navbar from "./components/Navbar";

import Items from "./components/Items";
import CustomItemContext from "./customProvider/CustomItemContext";
import CardModal from "./components/CardModal";

function App() {
  return (
    <>
      <CustomItemContext>
        <Navbar />
        <Items />
        {/* <CardModal /> */}
      </CustomItemContext>
    </>
  );
}

export default App;
