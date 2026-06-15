import {
    Paper,
    Typography,
    Divider,
    List,
    ListItem,
    ListItemText,
    Link,
    Box,
} from "@mui/material";

type TermsSection = {
    title: string;
    paragraphs: string[];
    list?: string[];
};

type TermsCardProps = {
    sections: TermsSection[];
};

const TermsCard = ({sections}: TermsCardProps) => {

    const getAnchorId = (title: string) =>
        title
            .toLowerCase()
            .replace(/[.]/g, "")
            .replace(/\s+/g, "-")
            .replace(/[àâä]/g, "a")
            .replace(/[éèêë]/g, "e")
            .replace(/[îï]/g, "i")
            .replace(/[ôö]/g, "o")
            .replace(/[ùûü]/g, "u");

    return (
        <Paper
            elevation={2}
            sx={{
                p: 4,
                borderRadius: 3,
                "& p": {
                    textAlign: "justify",
                },
                scrollBehavior: "smooth",
            }}
        >
            <Typography
                variant="h3"
                fontWeight={700}
                gutterBottom
            >
                Conditions d'utilisation de ClimbJAM
            </Typography>

            <Typography
                color="text.secondary"
                gutterBottom
            >
                Dernière mise à jour : Juin 2026
            </Typography>

            {/* SOMMAIRE */}
            <Paper
                variant="outlined"
                sx={{
                    p: 3,
                    mt: 4,
                    mb: 4,
                    bgcolor: "background.default",
                }}
            >
                <Typography variant="h6" gutterBottom>
                    Sommaire
                </Typography>

                <List dense>
                    {sections.map((section) => (
                        <ListItem
                            key={section.title}
                            sx={{py: 0}}
                        >
                            <Link
                                href={`#${getAnchorId(section.title)}`}
                                underline="hover"
                            >
                                {section.title}
                            </Link>
                        </ListItem>
                    ))}

                    <ListItem sx={{py: 0}}>
                        <Link
                            href="#contact"
                            underline="hover"
                        >
                            8. Contact
                        </Link>
                    </ListItem>
                </List>
            </Paper>

            {/* SECTIONS */}
            {sections.map((section) => (
                <Box
                    key={section.title}
                    id={getAnchorId(section.title)}
                >
                    <Divider sx={{my: 3}}/>

                    <Typography variant="h5" gutterBottom>
                        {section.title}
                    </Typography>

                    {section.paragraphs.map((paragraph) => (
                        <Typography key={paragraph} paragraph>
                            {paragraph}
                        </Typography>
                    ))}

                    {section.list && (
                        <List dense>
                            {section.list.map((item) => (
                                <ListItem key={item}>
                                    <ListItemText primary={item}/>
                                </ListItem>
                            ))}
                        </List>
                    )}
                </Box>
            ))}

            {/* CONTACT */}
            <Box id="contact">
                <Divider sx={{my: 3}}/>

                <Typography variant="h5" gutterBottom>
                    8. Contact
                </Typography>

                <Typography paragraph>
                    Pour toute question concernant l'application ou les présentes
                    conditions d'utilisation, vous pouvez contacter un des
                    développeurs via son portfolio :
                </Typography>

                <Link
                    href="https://alexandre-delsol-dev-portfolio.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Alexandre DELSOL
                </Link>
            </Box>

            <Typography
                sx={{
                    mt: 4,
                    fontStyle: "italic",
                    textAlign: "center",
                }}
            >
                En utilisant ClimbJAM, vous reconnaissez avoir lu et accepté ces
                conditions d'utilisation.
            </Typography>
        </Paper>
    );
};

export default TermsCard;