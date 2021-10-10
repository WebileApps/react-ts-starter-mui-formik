import { Button, ButtonProps } from "@mui/material";
import { useFormikContext } from "formik";

const MFSubmitButton = ({label = "Submit123", variant="contained", color="primary", fullWidth = true, ...props}: ButtonProps & {label?: string}) => {
    const formikContext = useFormikContext();
    const { isSubmitting: disabled } = formikContext;
    return (
        <Button
            type="submit"
            fullWidth={fullWidth}
            variant={variant}
            color={color}
            sx={{ mt: 3, mb: 2 }}
            {...props}
            disabled={disabled}
        >
            {label} {disabled ? "..." : ""}
        </Button>
    );
  };
  export default MFSubmitButton;