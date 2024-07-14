import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import {
  ChevronLeft,
  ChevronRight,
  InfoRounded,
  Work,
} from "@mui/icons-material";
import { Card, Grid, Tooltip } from "@mui/material";
import { styled } from "@mui/material/styles";
import moment from "moment";
import ProjectCard from "./projects/ProjectCard";
import { ProjectCardProps } from "../model.tsx/project";

export default function Experiences() {
  const StepIcon = styled("div")<{ active: boolean }>(({ theme, active }) => ({
    color: active ? theme.palette.primary.main : "lightgrey",
  }));

  const StepIconComponent: React.FC<StepIconProps> = ({
    icon: IconComponent,
    active = false,
  }) => {
    return (
      <StepIcon active={!!active}>
        <IconComponent />
      </StepIcon>
    );
  };

  const Sparksoft = () => (
    <>
      <Typography variant="h5" className="my-6">
        During my tenure at Sparksoft Sdn Bhd as a Full Stack Developer, our
        focus was on providing specialized IT services to clients. I specialized
        in developing comprehensive solutions for both mobile and web platforms.
      </Typography>
      <Typography variant="h5" className="my-6">
        My responsibilities included designing and implementing database
        schemas, writing code, conducting code reviews, mentoring team members,
        and approving pull requests.
      </Typography>
      <Typography variant="h5" className="my-6">
        I advocated for Docker as the deployment solution across various
        projects within a unified environment. Additionally, I designed and
        implemented a payment solution that seamlessly integrates multiple
        payment gateways into our applications.
      </Typography>
    </>
  );

  const Vintedge = () => (
    <>
      <Typography variant="h5" className="my-6">
        During my tenure at Vintedge Sdn Bhd as a Junior Web Developer, our
        focus was on providing specialized IT services to clients. I specialized
        in developing comprehensive solutions for both mobile and web platforms.
      </Typography>
      <Typography variant="h5" className="my-6">
        My responsibilities included designing and implementing database
        schemas, writing code, conducting code reviews, mentoring team members,
        and approving pull requests.
      </Typography>
      <Typography variant="h5" className="my-6">
        I advocated for Docker as the deployment solution across various
        projects within a unified environment. Additionally, I designed and
        implemented a payment solution that seamlessly integrates multiple
        payment gateways into our applications.
      </Typography>
    </>
  );

  type Experience = {
    title: string;
    company: string;
    start_date: Date;
    end_date?: Date;
    content: React.ReactNode;
    projects: ProjectCardProps[];
  };

  const steps: Experience[] = [
    {
      title: "Full Stack Developer",
      company: "Sparksoft Sdn Bhd",
      start_date: new Date(2022, 4, 1),
      content: <Sparksoft />,
      projects: [
        {
          name: '<span class="text-red-500">Fight zone</span>',
          title: "Fitness Franchise Management Solutions",
          subtitle:
            "A fitness brand with multiple franchises in Singapore, for which we developed software solutions, including websites and mobile applications, for use by all their members and staff.",
          link: "https://www.fightzonesg.com/",
          image:
            "https://www.fightzonesg.com/wp-content/uploads/2021/03/fz-favicon.png",
          categories: [
            {
              name: "NuxtJs",
              avatar:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAACqCAMAAAAKqCSwAAAANlBMVEUvSV7///8AxY4Rh3Xt7/EdcG0nW2UFtYi2wMc9VmnN1dqdqrQQoIBQZniIl6NidoZzhpRf2LesnlfBAAAFOklEQVR4nO2cDZOjIAyGa1VUxOr+/z978hEgiAqdXXBu8szN7dbW69uYvIS0vdeLIAiCIAiCIAiCIAiCIAiCIFJhYngPgtWWkUD/1vS1hdzC3sDj4yqsVFFbyg392/HwFNBB1X8PtcVc0huNg/rZ1pZzARvMlTeSH1xZra0n8fCwMudS3q+PxA+lC/ATwQkKaWtg/U4tZQdw2YMZmFut4iEJ0QZm6is3Sh+ilQVXHBUZKG0fkQPHOhL2SNs+SWvEnewh5kl9gNXGPB+y16Rp/4yw4noHdPoKI5E9o7LCmtLoF9CBwkeENTQqQKYFb2YQ+ICwnq74+x0/TdMIU02sfmU5Wwpp390ulUMkq4f1oo1iMqhNs8HN2mG9aE6nTknlcLtyZcWNSjM2mg8cqJsCcaNSLEZp003mSNWwXjXRHKQ2s314vbBebU22xrHA4+tV1rlR2Zp6SGVdbaNnrdEorm5YF8OJRUtcXx9dWXC8UljvjWp8QXXVNazDLsVjdS7l/SqpEtZ7o9KhdAHWp5UP65VRoQRdqhvW/eIPZT9XNqwEo4KbtQ3rfvFf7IGtamWd7VIkI174X1BldVqBRKMKDlWprFSjAuoZ1r1RcXxwgnXWnF8urOlGBQQvoFhlXS3+M77Ulg6lRbFhS45RAXUM676m5vt7ioTV1FQ0IkHsfGq0Ahe7lCAjMUEWF0iBbKMCyhtWyi4lTmnDStulxCm7d0lY/I9GFTygkGF9Z1RAyVbgfpwSNSqgpGHlL/6YcnuXjF1KnHJ7l3ujOq8pzadQZd3vUs6NCihkWHm7lDhlDCt3lxIn2CT+TVjFuVFNOlYp/4pOalt+7E/Cqq7/0MYQuvznFJTUrgf+RKr7yN+RJhOOX+pvS20vpPJ7dYgZS/11Cxh+Lazd3wbVtlVRfrKUCiz115XutGI44z3yLg3urr4sqr725xkIgiAIgiD+UxjLb7SWEQ3KPqOdRmzjGrtj7bi3t564vjWNnPPR/RnxUIMJr1llrd6+icxWm6Oh3tTZccSEtqaLfdiIJhbcjHs+h60KehbhzRV617nnff1B7pZc9K6kmjvkMMIOAmYYS5gBkdsA4PmbJ5XpiIrhfIRzIdVNSxKkKnmQDI0dX02K/b5R/4afxZO6S9RfgGTt2bjhQir6+MGtVHmKSdAunLTMJ/MsJ5V5oUQZnCjVZlaSVHmxR3NuIOxeav/9F3R408mS2DKkqsH15iVqOamyqE32pUnV6eolaoZUdjZkTJM6cUjXRKkqXQ+JmiRVzZm+G7NIqSr75hyp2puOqhKkMjO+y58LKKmQfclS1QmRiXCC1L3uYQHIXq068xwyXZOlylKMvMuWInUvLTF8t1opQZM2y7wE4Iewpkl9yS/niWytRqoxy0Sp8oXNXURWstSXSYS81coIUms7ltq4qK2oARmlY2zN8Z22HKlqjc1ZrqxUla6rkyo/n+D6mI/vTJsuqfmYrnlS22+lSrP0L6rf7cnV3qpazItwdnwm1RrS4C61Z1LfS52wWfrd3uiLsi2uteMTqQLe/GxdjyK8N0SHvIXLk6rfF3NPJd96kt38tKKmdnayD+kaStW6ZLfXumOmCZQtdma/6tX5B0mdVNfVcRVsm6mrn6Fhx4KlqoVJTrr9xk8vVvpoXjeApAa7kQW+SbN3X/5DXCAnjsP6CXIV9ibe/ybC3Ds4Q95ytXG/59h3c+jTM+soQ9rNXuRWdMLCUcXv5yNP0Du+ARcPa+Vqlb0LvOW4+cjki100QRAEQRAEQRAEQRAEQRAE8SX/AOhlMt+JlrzsAAAAAElFTkSuQmCC",
            },
            {
              name: "Laravel",
              avatar: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAaVBMVEX/////3Nv/cGr/dG7/5uX/+Pf/hYD/paL/nJj/jon//Pz/Y1z/hoD/eXP/6ej/ubf/8vL/sq//iYX/lZH/mZX/y8n/4N//g33/oJz/X1f/MiT/w8H/09H/fnj/kY3/q6j/TkX/WVH/amMDRFxnAAAAr0lEQVR4Ac3JxWHEMAAAwbUtNjNj/z0GPofKOzdiLZ8qCCOBn1QajHX4xAlAmgJkaZg/xaSI8jKVFbi6gTbquOtB55DAMGbAMD3HefmNGGnsHBbWHwuEgsQbG0kxwPoeK+otXJxm3d/jEWWQp2cveYlBd7UA7TXAaxx3ABHO7j1Ktf9uBgrDkwggCM0qgaLhSXAtACtAmRa8KKMMFCzXgofdsDIq8cvWqXb8SfL/vgFFhAm7+9RQWQAAAABJRU5ErkJggg==",
            },
            {
              name: "React Native",
              avatar:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAV1BMVEUgIyodFhscEhcfHSMbCQ5CiJ1Kn7gwWGYZAAAgIShPqsQ5b4FYw+BVutYaAABf1PQdFxwXAAA9e45byugUAAA3aXpLortk4v9Hlq1g2PlRscwuT1xAg5fRvaLqAAAAp0lEQVR4AcUSVQKFIAzHREA67Ptf83XHfiXXzXZdDfDzx6H55mErOqmU7ESLnzwQujcWwJpeC/hgOi9DTDmnGKR330ympPdOsZ9MLKZWU/CLCcUONo/5dE5AeXWqcJrNss6xlDivi5knVA8e9xM2ealca16XDDh5rh5pbJKhNkWPoy5GI5ObAJr5YjY8zTZPs3RAZCpEET7KJy/lIwtPtoxqNjkme64jrUEO64jJbGIAAAAASUVORK5CYII=",
            },
            {
              name: "MySQL",
              avatar: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAABwklEQVR4AVySA3AkQRSG+2wb5TqjeLZt24xt27Zt27Zt20nZm3/SWz2bnRo9fI9NXtmHLf9kQt4akMea5KE6eWdI7yUfjMTurX+sv7jGk+2/rT3TKms7h7Jru15YhUPcL+G86rMpB7/QYTD9AUOOyLtnVrVDuGMWmlvbWdLcV1jf3TU4EVPSdFrHl2NeLMpGoLKOK1IJyCC3FLmob/RRG4r8aheNtLElTbv+2kDDiiT4A4OqJD2TyT3VO4YBav7p0NCSJD3jRsZnnlmGQRQCtD4ERg8Ihp9DUg6c8v3C/UDtqILL2OTcX8dY4Ugoh2DvbcPsE0uQBFoewP1UC2MA88Q8lGPYBMAE59TeNwmmw4Erw+B3RsMPzLqvZkKAe78yhFzS2HNQzklsDxDBOCSVJpa3EjGtb3rlUUVXVpWoFctt6x/nAdzo2C+zGnmQDf/wYPlpn8cVXQhT0TYosOG7+XPzIIgsFo+JCigJSzyp5PrEJlIgEOz9ZyPK8AC7cQouavuC+eIQU9c+GJpXh5XTGfKd4DwxFS3UICwHE5T3Sb1qGGgelU8+mDMr54wLH5YEjaJdbAOdYIno8pqmO/LMD64aAI9KJeRHIoWtAAAAAElFTkSuQmCC",
            },
          ],
        },
        {
          name: '<span class="text-primary-900">Novel Leap</span>',
          title: "Investment Tracking Software",
          subtitle:
            "They provide financial advisory and investment guidance services, and we developed software solutions to offer a platform for tracking all investments the company has made for their investors.",
          link: "https://www.novelleap.com/",
          image: "/novelleap.png",
          categories: [
            {
              name: "NuxtJs",
              avatar:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAACqCAMAAAAKqCSwAAAANlBMVEUvSV7///8AxY4Rh3Xt7/EdcG0nW2UFtYi2wMc9VmnN1dqdqrQQoIBQZniIl6NidoZzhpRf2LesnlfBAAAFOklEQVR4nO2cDZOjIAyGa1VUxOr+/z978hEgiAqdXXBu8szN7dbW69uYvIS0vdeLIAiCIAiCIAiCIAiCIAiCIFJhYngPgtWWkUD/1vS1hdzC3sDj4yqsVFFbyg392/HwFNBB1X8PtcVc0huNg/rZ1pZzARvMlTeSH1xZra0n8fCwMudS3q+PxA+lC/ATwQkKaWtg/U4tZQdw2YMZmFut4iEJ0QZm6is3Sh+ilQVXHBUZKG0fkQPHOhL2SNs+SWvEnewh5kl9gNXGPB+y16Rp/4yw4noHdPoKI5E9o7LCmtLoF9CBwkeENTQqQKYFb2YQ+ICwnq74+x0/TdMIU02sfmU5Wwpp390ulUMkq4f1oo1iMqhNs8HN2mG9aE6nTknlcLtyZcWNSjM2mg8cqJsCcaNSLEZp003mSNWwXjXRHKQ2s314vbBebU22xrHA4+tV1rlR2Zp6SGVdbaNnrdEorm5YF8OJRUtcXx9dWXC8UljvjWp8QXXVNazDLsVjdS7l/SqpEtZ7o9KhdAHWp5UP65VRoQRdqhvW/eIPZT9XNqwEo4KbtQ3rfvFf7IGtamWd7VIkI174X1BldVqBRKMKDlWprFSjAuoZ1r1RcXxwgnXWnF8urOlGBQQvoFhlXS3+M77Ulg6lRbFhS45RAXUM676m5vt7ioTV1FQ0IkHsfGq0Ahe7lCAjMUEWF0iBbKMCyhtWyi4lTmnDStulxCm7d0lY/I9GFTygkGF9Z1RAyVbgfpwSNSqgpGHlL/6YcnuXjF1KnHJ7l3ujOq8pzadQZd3vUs6NCihkWHm7lDhlDCt3lxIn2CT+TVjFuVFNOlYp/4pOalt+7E/Cqq7/0MYQuvznFJTUrgf+RKr7yN+RJhOOX+pvS20vpPJ7dYgZS/11Cxh+Lazd3wbVtlVRfrKUCiz115XutGI44z3yLg3urr4sqr725xkIgiAIgiD+UxjLb7SWEQ3KPqOdRmzjGrtj7bi3t564vjWNnPPR/RnxUIMJr1llrd6+icxWm6Oh3tTZccSEtqaLfdiIJhbcjHs+h60KehbhzRV617nnff1B7pZc9K6kmjvkMMIOAmYYS5gBkdsA4PmbJ5XpiIrhfIRzIdVNSxKkKnmQDI0dX02K/b5R/4afxZO6S9RfgGTt2bjhQir6+MGtVHmKSdAunLTMJ/MsJ5V5oUQZnCjVZlaSVHmxR3NuIOxeav/9F3R408mS2DKkqsH15iVqOamyqE32pUnV6eolaoZUdjZkTJM6cUjXRKkqXQ+JmiRVzZm+G7NIqSr75hyp2puOqhKkMjO+y58LKKmQfclS1QmRiXCC1L3uYQHIXq068xwyXZOlylKMvMuWInUvLTF8t1opQZM2y7wE4Iewpkl9yS/niWytRqoxy0Sp8oXNXURWstSXSYS81coIUms7ltq4qK2oARmlY2zN8Z22HKlqjc1ZrqxUla6rkyo/n+D6mI/vTJsuqfmYrnlS22+lSrP0L6rf7cnV3qpazItwdnwm1RrS4C61Z1LfS52wWfrd3uiLsi2uteMTqQLe/GxdjyK8N0SHvIXLk6rfF3NPJd96kt38tKKmdnayD+kaStW6ZLfXumOmCZQtdma/6tX5B0mdVNfVcRVsm6mrn6Fhx4KlqoVJTrr9xk8vVvpoXjeApAa7kQW+SbN3X/5DXCAnjsP6CXIV9ibe/ybC3Ds4Q95ytXG/59h3c+jTM+soQ9rNXuRWdMLCUcXv5yNP0Du+ARcPa+Vqlb0LvOW4+cjki100QRAEQRAEQRAEQRAEQRAE8SX/AOhlMt+JlrzsAAAAAElFTkSuQmCC",
            },
            {
              name: "Laravel",
              avatar: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAaVBMVEX/////3Nv/cGr/dG7/5uX/+Pf/hYD/paL/nJj/jon//Pz/Y1z/hoD/eXP/6ej/ubf/8vL/sq//iYX/lZH/mZX/y8n/4N//g33/oJz/X1f/MiT/w8H/09H/fnj/kY3/q6j/TkX/WVH/amMDRFxnAAAAr0lEQVR4Ac3JxWHEMAAAwbUtNjNj/z0GPofKOzdiLZ8qCCOBn1QajHX4xAlAmgJkaZg/xaSI8jKVFbi6gTbquOtB55DAMGbAMD3HefmNGGnsHBbWHwuEgsQbG0kxwPoeK+otXJxm3d/jEWWQp2cveYlBd7UA7TXAaxx3ABHO7j1Ktf9uBgrDkwggCM0qgaLhSXAtACtAmRa8KKMMFCzXgofdsDIq8cvWqXb8SfL/vgFFhAm7+9RQWQAAAABJRU5ErkJggg==",
            },
            {
              name: "MySQL",
              avatar: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAABwklEQVR4AVySA3AkQRSG+2wb5TqjeLZt24xt27Zt27Zt20nZm3/SWz2bnRo9fI9NXtmHLf9kQt4akMea5KE6eWdI7yUfjMTurX+sv7jGk+2/rT3TKms7h7Jru15YhUPcL+G86rMpB7/QYTD9AUOOyLtnVrVDuGMWmlvbWdLcV1jf3TU4EVPSdFrHl2NeLMpGoLKOK1IJyCC3FLmob/RRG4r8aheNtLElTbv+2kDDiiT4A4OqJD2TyT3VO4YBav7p0NCSJD3jRsZnnlmGQRQCtD4ERg8Ihp9DUg6c8v3C/UDtqILL2OTcX8dY4Ugoh2DvbcPsE0uQBFoewP1UC2MA88Q8lGPYBMAE59TeNwmmw4Erw+B3RsMPzLqvZkKAe78yhFzS2HNQzklsDxDBOCSVJpa3EjGtb3rlUUVXVpWoFctt6x/nAdzo2C+zGnmQDf/wYPlpn8cVXQhT0TYosOG7+XPzIIgsFo+JCigJSzyp5PrEJlIgEOz9ZyPK8AC7cQouavuC+eIQU9c+GJpXh5XTGfKd4DwxFS3UICwHE5T3Sb1qGGgelU8+mDMr54wLH5YEjaJdbAOdYIno8pqmO/LMD64aAI9KJeRHIoWtAAAAAElFTkSuQmCC",
            },
          ],
        },
        {
          name: '<span class="text-orange-400">Xing Fu Li</span>',
          title: "Online Learning Platform",
          subtitle:
            "They organize online classes regularly. We provide an online platform for them to manage these classes, handle members' packages, and share media with different packages",
          link: "https://xingfuli.co/",
          image: "https://xingfuli.co/img/logoonly.png",
          categories: [
            {
              name: "NuxtJs",
              avatar:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAACqCAMAAAAKqCSwAAAANlBMVEUvSV7///8AxY4Rh3Xt7/EdcG0nW2UFtYi2wMc9VmnN1dqdqrQQoIBQZniIl6NidoZzhpRf2LesnlfBAAAFOklEQVR4nO2cDZOjIAyGa1VUxOr+/z978hEgiAqdXXBu8szN7dbW69uYvIS0vdeLIAiCIAiCIAiCIAiCIAiCIFJhYngPgtWWkUD/1vS1hdzC3sDj4yqsVFFbyg392/HwFNBB1X8PtcVc0huNg/rZ1pZzARvMlTeSH1xZra0n8fCwMudS3q+PxA+lC/ATwQkKaWtg/U4tZQdw2YMZmFut4iEJ0QZm6is3Sh+ilQVXHBUZKG0fkQPHOhL2SNs+SWvEnewh5kl9gNXGPB+y16Rp/4yw4noHdPoKI5E9o7LCmtLoF9CBwkeENTQqQKYFb2YQ+ICwnq74+x0/TdMIU02sfmU5Wwpp390ulUMkq4f1oo1iMqhNs8HN2mG9aE6nTknlcLtyZcWNSjM2mg8cqJsCcaNSLEZp003mSNWwXjXRHKQ2s314vbBebU22xrHA4+tV1rlR2Zp6SGVdbaNnrdEorm5YF8OJRUtcXx9dWXC8UljvjWp8QXXVNazDLsVjdS7l/SqpEtZ7o9KhdAHWp5UP65VRoQRdqhvW/eIPZT9XNqwEo4KbtQ3rfvFf7IGtamWd7VIkI174X1BldVqBRKMKDlWprFSjAuoZ1r1RcXxwgnXWnF8urOlGBQQvoFhlXS3+M77Ulg6lRbFhS45RAXUM676m5vt7ioTV1FQ0IkHsfGq0Ahe7lCAjMUEWF0iBbKMCyhtWyi4lTmnDStulxCm7d0lY/I9GFTygkGF9Z1RAyVbgfpwSNSqgpGHlL/6YcnuXjF1KnHJ7l3ujOq8pzadQZd3vUs6NCihkWHm7lDhlDCt3lxIn2CT+TVjFuVFNOlYp/4pOalt+7E/Cqq7/0MYQuvznFJTUrgf+RKr7yN+RJhOOX+pvS20vpPJ7dYgZS/11Cxh+Lazd3wbVtlVRfrKUCiz115XutGI44z3yLg3urr4sqr725xkIgiAIgiD+UxjLb7SWEQ3KPqOdRmzjGrtj7bi3t564vjWNnPPR/RnxUIMJr1llrd6+icxWm6Oh3tTZccSEtqaLfdiIJhbcjHs+h60KehbhzRV617nnff1B7pZc9K6kmjvkMMIOAmYYS5gBkdsA4PmbJ5XpiIrhfIRzIdVNSxKkKnmQDI0dX02K/b5R/4afxZO6S9RfgGTt2bjhQir6+MGtVHmKSdAunLTMJ/MsJ5V5oUQZnCjVZlaSVHmxR3NuIOxeav/9F3R408mS2DKkqsH15iVqOamyqE32pUnV6eolaoZUdjZkTJM6cUjXRKkqXQ+JmiRVzZm+G7NIqSr75hyp2puOqhKkMjO+y58LKKmQfclS1QmRiXCC1L3uYQHIXq068xwyXZOlylKMvMuWInUvLTF8t1opQZM2y7wE4Iewpkl9yS/niWytRqoxy0Sp8oXNXURWstSXSYS81coIUms7ltq4qK2oARmlY2zN8Z22HKlqjc1ZrqxUla6rkyo/n+D6mI/vTJsuqfmYrnlS22+lSrP0L6rf7cnV3qpazItwdnwm1RrS4C61Z1LfS52wWfrd3uiLsi2uteMTqQLe/GxdjyK8N0SHvIXLk6rfF3NPJd96kt38tKKmdnayD+kaStW6ZLfXumOmCZQtdma/6tX5B0mdVNfVcRVsm6mrn6Fhx4KlqoVJTrr9xk8vVvpoXjeApAa7kQW+SbN3X/5DXCAnjsP6CXIV9ibe/ybC3Ds4Q95ytXG/59h3c+jTM+soQ9rNXuRWdMLCUcXv5yNP0Du+ARcPa+Vqlb0LvOW4+cjki100QRAEQRAEQRAEQRAEQRAE8SX/AOhlMt+JlrzsAAAAAElFTkSuQmCC",
            },
            {
              name: "Laravel",
              avatar: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAaVBMVEX/////3Nv/cGr/dG7/5uX/+Pf/hYD/paL/nJj/jon//Pz/Y1z/hoD/eXP/6ej/ubf/8vL/sq//iYX/lZH/mZX/y8n/4N//g33/oJz/X1f/MiT/w8H/09H/fnj/kY3/q6j/TkX/WVH/amMDRFxnAAAAr0lEQVR4Ac3JxWHEMAAAwbUtNjNj/z0GPofKOzdiLZ8qCCOBn1QajHX4xAlAmgJkaZg/xaSI8jKVFbi6gTbquOtB55DAMGbAMD3HefmNGGnsHBbWHwuEgsQbG0kxwPoeK+otXJxm3d/jEWWQp2cveYlBd7UA7TXAaxx3ABHO7j1Ktf9uBgrDkwggCM0qgaLhSXAtACtAmRa8KKMMFCzXgofdsDIq8cvWqXb8SfL/vgFFhAm7+9RQWQAAAABJRU5ErkJggg==",
            },
            {
              name: "React Native",
              avatar:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAV1BMVEUgIyodFhscEhcfHSMbCQ5CiJ1Kn7gwWGYZAAAgIShPqsQ5b4FYw+BVutYaAABf1PQdFxwXAAA9e45byugUAAA3aXpLortk4v9Hlq1g2PlRscwuT1xAg5fRvaLqAAAAp0lEQVR4AcUSVQKFIAzHREA67Ptf83XHfiXXzXZdDfDzx6H55mErOqmU7ESLnzwQujcWwJpeC/hgOi9DTDmnGKR330ympPdOsZ9MLKZWU/CLCcUONo/5dE5AeXWqcJrNss6xlDivi5knVA8e9xM2ealca16XDDh5rh5pbJKhNkWPoy5GI5ObAJr5YjY8zTZPs3RAZCpEET7KJy/lIwtPtoxqNjkme64jrUEO64jJbGIAAAAASUVORK5CYII=",
            },
            {
              name: "MySQL",
              avatar: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAABwklEQVR4AVySA3AkQRSG+2wb5TqjeLZt24xt27Zt27Zt20nZm3/SWz2bnRo9fI9NXtmHLf9kQt4akMea5KE6eWdI7yUfjMTurX+sv7jGk+2/rT3TKms7h7Jru15YhUPcL+G86rMpB7/QYTD9AUOOyLtnVrVDuGMWmlvbWdLcV1jf3TU4EVPSdFrHl2NeLMpGoLKOK1IJyCC3FLmob/RRG4r8aheNtLElTbv+2kDDiiT4A4OqJD2TyT3VO4YBav7p0NCSJD3jRsZnnlmGQRQCtD4ERg8Ihp9DUg6c8v3C/UDtqILL2OTcX8dY4Ugoh2DvbcPsE0uQBFoewP1UC2MA88Q8lGPYBMAE59TeNwmmw4Erw+B3RsMPzLqvZkKAe78yhFzS2HNQzklsDxDBOCSVJpa3EjGtb3rlUUVXVpWoFctt6x/nAdzo2C+zGnmQDf/wYPlpn8cVXQhT0TYosOG7+XPzIIgsFo+JCigJSzyp5PrEJlIgEOz9ZyPK8AC7cQouavuC+eIQU9c+GJpXh5XTGfKd4DwxFS3UICwHE5T3Sb1qGGgelU8+mDMr54wLH5YEjaJdbAOdYIno8pqmO/LMD64aAI9KJeRHIoWtAAAAAElFTkSuQmCC",
            },
          ],
        },
      ],
    },
    {
      title: "Junior Web Developer",
      company: "Vintedge Sdn Bhd",
      start_date: new Date(2021, 7, 1),
      end_date: new Date(2021, 11, 1),
      content: <Vintedge />,
      projects: [
        {
          name: '<span class="text-primary-700">Innovix</span>',
          title: "Online marketplace for computer products and gadgets",
          subtitle:
            "An online marketplace that sell computer products and gadgets in several countries in Asia",
          link: "https://my.innovixmarketplace.com/",
          image:
            "https://my.innovixmarketplace.com/themes/innovix/img/tectd-new-logo.png",
          categories: [
            {
              name: "Yii 1",
              avatar:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAt1BMVEX////v9uiq0oKDvz/b68z87OT41ML3yrT40Lz75Nl8vC+GwEWIwUno8t7uhkTsdR/seSrzr4z+9fGWyGHtgDvsezGZyWZ+vDPwlF7zq4T1+vHS5r/1u51/vTfG4K3sdBv52svL47ajz3nj8Nfwm2v4wKfW7sy62pvxoHP+08a62PCcxOTvbwnt17wAfcMAesI9mdbqxLNdntERf8QdgsXu4t2vzOYAeMGLuN7y9/t2q9fd6vXS4/EDLU6aAAAA6UlEQVR4Aa3ORZaDABBF0R83pOKKQ3sch/2vq/GW1DB3+k4JnqrV7nTR6PUHwxFq3fFEGIuoSDIRyTSdISeOBUGYzOu4KC3lATKriZBZt6q4WVZZ3gK7sZDr7Kt4qOOCphCVMqr1P9qipulYl9FAZUpNXcKc5FGxULObSs6LUkzihyPTsh5V8vaK34ZvVHR6z/cq+E/fEi2WttoRFAOMgUTU7XRMcD4+D19HRQDrdL5cD8oOnNvdvbueCI4fuK57CsE6uZmzzw+e8xhE4C/mW2OwAjeP/GCSxfs5ASsN7sEln2Mn3TDFk3wDpZocEcI9mIcAAAAASUVORK5CYII=",
            },
            {
              name: "Bootstrap",
              avatar: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAnFBMVEWRC/6ICvuHCvuCCvp9Cvh5CfeFAPt3APd1Cfaqa/fo2vzr3fzh0fqgZ/SfU/b////SvPPDo/K9nvHMtfOQTvHPsfhpB/PGq/XfzflzCfXcyfhqB/OROfeWR/XWwvf48P27j/V5DOeDLOqHOeure/SuiPLw5fuQOfF4BO306/yVWe+IJu/68/2da+t2JOr++f5YAOicZ++IRezCo/c66xoZAAABbklEQVR4AVTSVZbDMAxA0RrlhmHigMvMuP+9jeSc0vu9iXnwjjHGMUFJTCn1Zdi3Yb/2QfVB7RPwicz0NgzCMPgqiuGFOkmz/KuiKNM/UKbHKjDaT6UUKABjbFSDeWGjOeOa6lfTdrV7YdkJzvVojEnwOKkQW49dqRmHIKUqg4O31cSZlpDJ6UxzDs10vlhm6Qpw5vXG9qhH6bbHVsAuzQmX6QIItYwCxQn3FmCVHhCVjRrr2oEeT6dH/FFAd2qa8HR2aAYum83SIm5OI80F4rQo8uAa0/ZhsQ+XbsD0rgvA4x5XeIv2DtFGk5tDZPqIC/LYSnDVtcUfl+nFemRqMxOEG5wungbOGLcO0Qg5ZBUgNlcqXAJiXXqkC64zwr879nBorS3z/k/OZT4BISX4lCHMitef8tk4eOUwaztCiyj0+Fo+f6qujxcKdcgm2XflgQxRYNK0mOuzlPP481BpNa+v7P+AkjjlEJIIOWRJAHBVLANkOCX8AAAAAElFTkSuQmCC",
            },
            {
              name: "MySQL",
              avatar: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAABwklEQVR4AVySA3AkQRSG+2wb5TqjeLZt24xt27Zt27Zt20nZm3/SWz2bnRo9fI9NXtmHLf9kQt4akMea5KE6eWdI7yUfjMTurX+sv7jGk+2/rT3TKms7h7Jru15YhUPcL+G86rMpB7/QYTD9AUOOyLtnVrVDuGMWmlvbWdLcV1jf3TU4EVPSdFrHl2NeLMpGoLKOK1IJyCC3FLmob/RRG4r8aheNtLElTbv+2kDDiiT4A4OqJD2TyT3VO4YBav7p0NCSJD3jRsZnnlmGQRQCtD4ERg8Ihp9DUg6c8v3C/UDtqILL2OTcX8dY4Ugoh2DvbcPsE0uQBFoewP1UC2MA88Q8lGPYBMAE59TeNwmmw4Erw+B3RsMPzLqvZkKAe78yhFzS2HNQzklsDxDBOCSVJpa3EjGtb3rlUUVXVpWoFctt6x/nAdzo2C+zGnmQDf/wYPlpn8cVXQhT0TYosOG7+XPzIIgsFo+JCigJSzyp5PrEJlIgEOz9ZyPK8AC7cQouavuC+eIQU9c+GJpXh5XTGfKd4DwxFS3UICwHE5T3Sb1qGGgelU8+mDMr54wLH5YEjaJdbAOdYIno8pqmO/LMD64aAI9KJeRHIoWtAAAAAElFTkSuQmCC",
            },
          ],
        },
      ],
    },
  ];

  const [activeStep, setActiveStep] = React.useState(1);

  const _handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const _handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const _convertWorkingDuration = (start: Date, end?: Date) => {
    let start_date = moment(start);
    let end_date = end ? moment(end) : moment();
    let total_months = end_date.diff(moment(start_date), "months");
    let service_duration =
      total_months >= 12
        ? `${Math.floor(total_months / 12)} years and ${
            total_months % 12
          } months`
        : `${total_months % 12} months`;
    return `${start_date.format("MMMM YYYY")} - ${end_date.format(
      "MMMM YYYY"
    )} (${service_duration})`;
  };

  return (
    <section className="flex flex-col items-center justify-between">
      <h3 className="text-4xl font-bold mb-6">Work Experiences</h3>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Box className="relative rounded-full bg-primary-100 p-20 overflow-hidden mt-4 mx-6">
            <Box className="overflow-auto h-full w-full mx-6">
              <div className="mb-2 flex justify-end">
                <IconButton
                  color="primary"
                  onClick={_handleBack}
                  disabled={activeStep <= 1}
                  aria-label="Previous Step"
                >
                  <ChevronLeft sx={{ fontSize: 55 }} />
                </IconButton>
                <IconButton
                  color="primary"
                  onClick={_handleNext}
                  disabled={activeStep >= steps.length}
                  aria-label="Next Step"
                >
                  <ChevronRight sx={{ fontSize: 55 }} />
                </IconButton>
              </div>
              <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                  <Step key={step.title}>
                    <StepLabel
                      StepIconComponent={() => (
                        <StepIconComponent
                          icon={Work}
                          active={index + 1 === activeStep}
                        />
                      )}
                    >
                      <div className="ml-3">
                        <Typography
                          variant="h5"
                          className="capitalize font-bold"
                        >
                          {step.title}
                        </Typography>
                        <Typography variant="subtitle1">
                          {step.company}
                        </Typography>
                        <Typography variant="subtitle1">
                          {_convertWorkingDuration(
                            step.start_date,
                            step.end_date
                          )}
                        </Typography>
                      </div>
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={8} className="flex justify-center flex-col px-4">
          {steps[activeStep - 1]?.content}
        </Grid>
        <div className="px-4 bg-gray-100 mt-12 pt-8 w-full">
          <Typography variant="h4" className="text-center font-bold">
            Projects that I worked on
          </Typography>
          <Grid container spacing={8} className="py-2 m-0 w-full">
            {steps[activeStep - 1].projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </Grid>
        </div>
      </Grid>
    </section>
  );
}
