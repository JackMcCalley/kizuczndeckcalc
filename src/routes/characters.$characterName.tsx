import { createFileRoute } from '@tanstack/react-router'
import { getCharacters } from '../data/characters'
import { Link } from '@tanstack/react-router'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { createSlug } from '@/utils/slug'

export const Route = createFileRoute('/characters/$characterName')({
  loader: async ({ params }) => {
    const characters = await getCharacters()
    const character = characters.find(
      (char) => createSlug(char.name) === params.characterName
    )
    
    if (!character) {
      throw new Error('Character not found')
    }
    
    return { character }
  },
  component: CharacterDetailComponent,
})

function CharacterDetailComponent() {
  const { character } = Route.useLoaderData()

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <Link to="/characters">
        <Button variant="outline" className="mb-4">
          ← Back to Characters
        </Button>
      </Link>
      
      <Card>
        <CardHeader>
          <img
            src={character.image.src}
            alt={character.name}
            className="w-full max-w-md mx-auto"
          />
          <CardTitle className="text-3xl">{character.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">Attribute</h3>
              <p>{character.attribute || 'None'}</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Rarity</h3>
              <p>{character.rarity}★</p>
            </div>
            {character.job && (
              <div>
                <h3 className="font-semibold text-lg">Job</h3>
                <p>{character.job}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}