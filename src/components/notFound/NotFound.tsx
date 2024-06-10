import { Emoticon, NotFoundText, NotFoundWrapper } from "./NotFound.style";



export default function NotFound () {

    return(
        <NotFoundWrapper>
            <Emoticon>☹️</Emoticon>
            <NotFoundText>Unfortunately, nothing was found for your request. Try another query or browse other categories.</NotFoundText>
        </NotFoundWrapper>
    )
}