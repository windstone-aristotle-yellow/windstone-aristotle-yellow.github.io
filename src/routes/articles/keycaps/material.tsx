import { createFileRoute } from '@tanstack/react-router'
import MobileNavbar from "../../../components/MobileNavbar/MobileNavbar.tsx";

const KeycapsMaterial = () => {
    return (
        <MobileNavbar>
            <></>
        </MobileNavbar>
    )
}

export const Route = createFileRoute('/articles/keycaps/material')({
    component: KeycapsMaterial
})