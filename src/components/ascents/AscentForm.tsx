import {useEffect, useState} from "react";
import {fetchRoutesById} from "../../api/route-api.ts";
import type {Route} from "../../@types/route.type.ts";
import {useNavigate, useParams} from "react-router";
import {
    FormControlLabel,
    FormHelperText,
    FormLabel,
    Radio,
    RadioGroup,
    TextareaAutosize,
    TextField,
    Typography
} from "@mui/material";
import {Controller, useForm} from "react-hook-form";
import {Box} from "@mui/joy";
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import Stack from "@mui/material/Stack";
import ClimbingRouteDetailsCard from "../climbing-routes/ClimbingRouteDetailsCard.tsx";
import BackNav from "../../pages/A_nav/BackNav.tsx";
import {fetchPostAscent} from "../../api/ascent-api.ts";
import type {PickerValue} from "@mui/x-date-pickers/internals";

import dayjs from "dayjs";
import "dayjs/locale/fr";
import {toast} from "react-toastify";
dayjs.locale("fr");


type FormInputs = {
    tries:number
    style: string
    date: PickerValue
    comment: string
    route:Partial<Route>
}

const AscentForm = () => {
    const {idRoute} = useParams();
    const [routes, setRoutes] = useState<Route>({} as Route)
    const navigate = useNavigate();
    useEffect(() => {
        if (idRoute) {
            fetchRoutesById(idRoute)
                .then((fetchedRoute: Route) => {
                    setRoutes(fetchedRoute);
                })
        }
    }, [idRoute]);

    const {control, register, handleSubmit, watch, setError, formState: {errors}} = useForm<FormInputs>();

    const onSubmit = (data: FormInputs) => {
        data = {
            route: {id: Number(idRoute)!},
            date : data.date,
            style : data.style,
            tries : Number(data.tries),
            comment : data.comment
        }

        fetchPostAscent(data).then(() => {
            toast.success("La croix a été ajoutée");
            navigate(-1);
        })
            .catch(() => toast.warning("Erreur lors de l'ajout"));
    }

    return (
        <>
            <BackNav backNavText={"Le spot"}/>
            <Box mt={"38px"} mb={"60px"}>
            <ClimbingRouteDetailsCard routes={routes}/>
            <form onSubmit={handleSubmit(onSubmit)} style={{paddingTop:'10px',marginBottom:'40px'}}>
                <Stack textAlign={"left"} justifyContent={"flex-start"} justifyItems={"flex-start"} direction="column"
                       spacing={2}>
                    <FormLabel id="style">J'ai fait la ligne : </FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="style"
                        name="style"
                    >
                        <FormControlLabel value="redpoint" control={<Radio {...register("style", {required: "Style obligatoire"})}/>}
                                          label="Après travail"/>
                        <FormControlLabel value="flash" control={<Radio {...register("style", {required: "Style obligatoire"})} />} label="Flash"/>
                        <FormControlLabel value="onSight" control={<Radio{...register("style", {required: "Style obligatoire"})}/>} label="À vue"/>
                        <FormControlLabel value="notMasteredYet" control={<Radio{...register("style", {required: "Style obligatoire"})}/>}
                                          label="Pas encore maîtrisée"/>

                    </RadioGroup>
                    {errors.style && <FormHelperText>
                        <Typography color="error">{errors.style.message}</Typography>
                    </FormHelperText>}
                    <FormLabel id="date">Date : </FormLabel>
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr">
                        <Box>
                            <Controller
                                name="date"
                                control={control}
                                rules={{required: "Date obligatoire"}}
                                render={({field}) => (
                                    <DatePicker
                                        label="Date de la réalisation"
                                        value={field.value ? dayjs(field.value) : null}
                                        onChange={(date) => {
                                            if (date) {
                                                const isoSafe = date
                                                    .hour(12)
                                                    .minute(0)
                                                    .second(0)
                                                    .millisecond(0)
                                                    .toISOString(); // ex: "2025-09-23T10:00:00.000Z" mais toujours le 23
                                                field.onChange(isoSafe);
                                            } else {
                                                field.onChange(null);
                                            }
                                        }}
                                    />
                                )}
                            />
                        </Box>
                    </LocalizationProvider>
                    {errors.date && <FormHelperText>
                        <Typography color="error">{errors.date.message}</Typography>
                    </FormHelperText>}
                    <FormLabel id="tries">Nombre d'essais : </FormLabel>
                    <TextField type="number" placeholder="Nombre d'essais" {...register("tries", {
                        max: 500,
                        min: 1,
                        value: 1,
                        required: "Essai obligatoire"
                    })} error={!!errors.tries}/>
                    {errors.tries && <FormHelperText>
                        <Typography color="error">{errors.tries.message}</Typography>
                    </FormHelperText>}
                    <FormLabel id="comment">Commentaire : </FormLabel>
                    <TextareaAutosize
                        aria-label="comment"
                        minRows={3}
                        placeholder="Ajoute un commentaire..."
                        style={{width: "100%"}}
                        {...register("comment", {
                            maxLength:{value: 255, message: "Ecris moins"},
                        })}
                    />
                    <Typography>{watch("comment")?.length??0}/255 caractères</Typography>
                    {errors.comment && <FormHelperText>
                        <Typography color="error">{errors.comment.message}</Typography>
                    </FormHelperText>}
                    <button type="submit"  >Ajouter</button>
                </Stack>
            </form>
            </Box>

        </>
    );
};

export default AscentForm;
