import axios from "axios";
import { toast } from "react-toastify";

/**
 * ErrorHandler pour Axios
 * @param error L'erreur Axios ou autre
 * @param navigate Fonction de navigation (optionnelle)
 */
export const handleError = (error: any, navigate?: (path: string) => void) => {
    if (axios.isAxiosError(error)) {
        const err = error.response;

        if (Array.isArray(err?.data?.errors)) {
            for (const val of err.data.errors) {
                toast.warning(val.description ?? "Une erreur est survenue.");
            }
        } else if (typeof err?.data?.errors === "object" && err?.data?.errors !== null) {
            for (const key in err.data.errors) {
                if (err.data.errors[key]?.[0]) {
                    toast.warning(err.data.errors[key][0]);
                }
            }
        } else if (err?.status === 401) {
            toast.warning("Veuillez vous connecter.");
            if (navigate) {
                navigate("/login");
            } else {
                // fallback si pas de navigate fourni
                window.location.href = "/login";
            }
        } else if (err?.data) {
            toast.warning(err.data);
        } else {
            toast.warning("Une erreur inconnue est survenue.");
        }
    } else {
        toast.error("Erreur inattendue.");
    }
};
