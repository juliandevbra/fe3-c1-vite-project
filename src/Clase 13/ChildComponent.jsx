import { useRecipeStates } from "../Context/Context";
import Button from "../Components/Button";

const ChildComponent = () => {
  console.log("Se renderizó el hijo");
  const { salario, setSalario } = useRecipeStates();
  return (
    <div className="child">
      <h3>ChildComponent</h3>
      <p>Cuanto ganas por semestre?</p>
      <h3>Total: {salario * 6} </h3>
      <Button onClick={() => setSalario(salario + 300000)}>
        Subime el salario
      </Button>
    </div>
  );
};

export default ChildComponent;
