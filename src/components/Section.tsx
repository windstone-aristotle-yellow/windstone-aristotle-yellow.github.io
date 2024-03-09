import {Button, Flex} from "@mantine/core";
import {Link} from "@tanstack/react-router";
import {useDisclosure} from "@mantine/hooks";

const Section = (props: { title: string; description: string; imageURL: string; imageAlt: string; pageURL: string; }) => {
    const { title, description, imageURL, imageAlt, pageURL } = props

    const [loading, { toggle }] = useDisclosure()

    return (
        <Flex
            className="main__section"
            justify="center"
            align="center"
            direction="row"
            wrap="nowrap"
            gap="1rem"
        >
            <div className="main__block">
                <img className="main__image"
                     src={imageURL}
                     alt={imageAlt}
                />
            </div>
            <div className="main__block">
                <h1 className="main__title">{title}</h1>
                <p className="main__description">{description}</p>
                <Button className="main__button" component={Link} to={pageURL} onClick={toggle} loading={loading} loaderProps={{ type: 'dots' }}>Перейти</Button>
            </div>
        </Flex>
    );
}

export default Section