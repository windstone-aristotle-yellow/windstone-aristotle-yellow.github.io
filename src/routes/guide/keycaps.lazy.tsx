import {createFileRoute, Link} from '@tanstack/react-router'

export const Route = createFileRoute('/guide/keycaps')({
  component: Keycaps,
    staticData: {
        titleRU: "Кейкапы"
    }
})

function Keycaps() {
    return (
        <div>
            <h1>Гайд</h1>
            <Link to='/guide/'>Вернуться</Link>
        </div>
    )
}