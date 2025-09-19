import {useEffect, useState} from "react";
import {fetchRoutesById} from "../../api/route-api.ts";
import type {Route} from "../../@types/route.type.ts";
import {useParams} from "react-router";
import {FormControlLabel, FormLabel, Radio, RadioGroup, TextareaAutosize, TextField} from "@mui/material";
import {Controller, useForm} from "react-hook-form";
import {Box} from "@mui/joy";
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import Stack from "@mui/material/Stack";
import RouteDetailsCard from "./RouteDetailsCard.tsx";
import {date} from "yup";
import type {PickerValue} from "@mui/x-date-pickers/internals";

const RouteDetails = () => {
    const {idRoute} = useParams();
    const [routes, setRoutes] = useState<Route>({} as Route)

    useEffect(() => {
        if (idRoute) {
            fetchRoutesById(idRoute)
                .then((fetchedRoute: Route) => {
                    setRoutes(fetchedRoute);
                })
        }
    }, [idRoute]);

    const {control, register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = (data: {
        performence: string,
        nbrOfTry: string,
        comment: string,
        date: PickerValue
    }) => {
        data = {
            tries : data.nbrOfTry
        }
        api.post(url,data)
        console.log(data?.date?.toISOString());
    }
    console.log(errors);
    return (
        <div>
            <RouteDetailsCard routes={routes}/>
            <form onSubmit={handleSubmit(onSubmit)} style={{paddingTop:'10px'}}>
                <Stack textAlign={"left"} justifyContent={"flex-start"} justifyItems={"flex-start"} direction="column"
                       spacing={2}>
                    <FormLabel id="performence">J'ai fait la ligne: </FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="performence"
                        name="performence"
                    >
                        <FormControlLabel value="redpoint" control={<Radio {...register("performence")}/>}
                                          label="Après travail"/>
                        <FormControlLabel value="flash" control={<Radio {...register("performence")} />} label="Flash"/>
                        <FormControlLabel value="onSight" control={<Radio{...register("performence")}/>} label="À vue"/>
                        <FormControlLabel value="notMasteredYet" control={<Radio{...register("performence")}/>}
                                          label="Pas encore maîtriser"/>

                    </RadioGroup>
                    <FormLabel id="date">Date: </FormLabel>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Box>
                            <Controller
                                name="date"
                                control={control}
                                render={({field}) => (
                                    <DatePicker
                                        label="Date de la réalisation"
                                        value={field.value || null}
                                        onChange={(date) => field.onChange(date)}
                                    />
                                )}
                            />
                        </Box>
                    </LocalizationProvider>
                    <FormLabel id="nbrOfTry">Nombre d'essaie: </FormLabel>
                    <TextField type="number" placeholder="Nombre d'essaie" {...register("nbrOfTry", {
                        max: 500,
                        min: 1,
                        value: 1
                    })} />
                    <FormLabel id="comment">Commentaire: </FormLabel>
                    <TextareaAutosize
                        aria-label="comment"
                        minRows={3}
                        placeholder="Ajoute un commentaire..."
                        style={{width: "100%"}}
                        {...register("comment")}
                    />
                    <button type="submit">Ajouter</button>
                </Stack>
            </form>

        </div>
    );
};

export default RouteDetails;
