import { createFileRoute } from '@tanstack/react-router'
import { getCharacters } from '@/data/characters'
import CharacterCard from '@/components/CharacterCard'

export const Route = createFileRoute('/characters/')({
  loader: async () => {
    const characters = await getCharacters()
    return { characters }
  },
  component: CharactersListComponent,
})

function CharactersListComponent() {
  const { characters } = Route.useLoaderData()
  return (
    <div className="container mx-auto p-4">
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {characters.map((char) => (
          <div key={char.id} className="h-full">
            <CharacterCard char={char} />
          </div>
        ))}
      </section>
    </div>
  )
}
