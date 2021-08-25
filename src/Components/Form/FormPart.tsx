import React from 'react';
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {css} from "@emotion/css";

const __css_form_page = css `

`;
const FormPart = () => {
    const [value, setValue] = React.useState('female');

    const handleChange = (event: any) => {
        setValue(event.target.value);
    };
    return (
        <React.Fragment>
            <div className={__css_form_page}>
                <h3>Packages | <span>Create Package</span></h3>
                <div className={"container"}>
                    <Grid container>
                        <Grid item md={3}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Gender</FormLabel>
                                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                                    <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                                    <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                                    <FormControlLabel value="other" control={<Radio/>} label="Other"/>
                                    <FormControlLabel value="disabled" disabled control={<Radio/>}
                                                      label="(Disabled option)"/>
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item md={3}></Grid>
                        <Grid item md={3}></Grid>
                        <Grid item md={3}></Grid>
                    </Grid>
                </div>
            </div>
        </React.Fragment>
    );
};

export default FormPart;
