import { createFileRoute } from '@tanstack/react-router'
import MobileNavbar from "../../../components/MobileNavbar/MobileNavbar.tsx";
import ArticleContent from "../../../components/ArticleContent/ArticleContent.tsx";
import MaterialPost from "../../../content/keycaps/material.md";

const KeycapsMaterial = () => {
    const briefText = [
        "Первый заголовок",
        "Второй заголовок",
        "Третий заголовок"
    ]

    const pages = {
        "nextPage": "",
        "previousPage": "",
        "linkToNextPage": "/",
        "linkToPreviousPage": "/"
    }

    return (
        <MobileNavbar>
            <ArticleContent
                title=""
                briefImage=""
                briefText={briefText}
                pages={pages}
            >
                <MaterialPost />
            </ArticleContent>
        </MobileNavbar>
    )
}

export const Route = createFileRoute('/articles/keycaps/material')({
    component: KeycapsMaterial
})