

export const handleBorder = (routesGrade: string, setBorder: (value: (((prevState: string) => string) | string)) => void) => {
    switch (routesGrade) {
        case "3a":
            return setBorder("#FBFFAB");
        case "3b":
            return setBorder("#F8FF6A");
        case "3c":
            return setBorder("#FFCC00");
        case "4a":
            return setBorder("#FFB77D");
        case "4b":
            return setBorder("#FF9641");
        case "4c":
            return setBorder("#FF7300");
        case "5a":
            return setBorder("#ACFFA0");
        case "5b":
            return setBorder("#4EFF51");
        case "5c":
            return setBorder("#40AE00");
        case "6a":
            return setBorder("#91ADFC");
        case "6b":
            return setBorder("#4E54FF");
        case "6c":
            return setBorder("#0006AE");
        case "7a":
            return setBorder("#BF91FC");
        case "7b":
            return setBorder("#CA4EFF");
        case "7c":
            return setBorder("#9400AE");
        case "8a":
            return setBorder("#FC9192");
        case "8b":
            return setBorder("#FF4E51");
        case "8c":
            return setBorder("#AE0003");
        case "9a":
            return setBorder("#A3A3A3");
        case "9b":
            return setBorder("#5F5F61");
        case "9c":
            return setBorder("#393939");
        default:
            return setBorder("#FF00BB");
    }
};