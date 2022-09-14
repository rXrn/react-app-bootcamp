import { Button } from "react-bootstrap";

export function CounterButton(props) {
  const { label, action, isDisable } = props;

  return (
    <Button disabled={isDisable} onClick={() => action()}>
      {label}
    </Button>
  );
}
