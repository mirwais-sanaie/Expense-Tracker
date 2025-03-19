import { Button as ButtnUi } from "@mantine/core";

function Button({ onClick, children, color }) {
  return (
    <ButtnUi
      onClick={onClick}
      variant="filled"
      color={color}
      size="sm"
      radius="sm"
    >
      {children}
    </ButtnUi>
  );
}

export default Button;
