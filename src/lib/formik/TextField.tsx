import TextField, { TextFieldProps } from '@mui/material/TextField';
import { useField } from "formik";

export function MFTextField({name, variant="outlined", margin="normal", fullWidth = true, ...rest}: TextFieldProps & {name: string}) {
    const [field, meta] = useField(name);
    return (
        <TextField
            variant={variant}
            margin={margin}
            fullWidth={fullWidth}
            helperText={meta.touched && meta.error ? meta.error : null}
            error={!!(meta.touched && !!meta.error)}
            {...field}
            {...rest}
        />
    );
}