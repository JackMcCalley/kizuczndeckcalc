import { createFileRoute } from '@tanstack/react-router'
import 'dotenv/config'
import { drizzle } from 'drizzle-orm/node-postgres'
import { getCharacters } from '@/data/characters'
import CharacterCard from '@/components/CharacterCard'

const db = drizzle(process.env.DATABASE_URL!)

export const Route = createFileRoute('/')({
  loader: async () => {
    const characters = await getCharacters()
    return { characters }
  },
  component: App,
})

function App() {
  const { characters } = Route.useLoaderData()

  interface SaveData {
    character: object
    tier: number
    cap: number
  }

  enum tier {
    one = 30,
    two = 40,
    three = 50,
    four = 60,
    five = 70,
    six = 80,
    seven = 90,
    eight = 100,
    nine = 110,
    ten = 120,
    eleven = 130,
    twelve = 140,
    thirteen = 150,
    fourteen = 160,
    fifteen = 170,
  }

  enum cardValue {
    neutral = 20,
    neutralEpiphany = 30,
    forbidden = 20,
    monster = 80,
    copy1 = 0,
    copy2 = 10,
    copy3 = 30,
    copy4 = 50,
    copy5 = 70,
    removal1 = 0,
    removal2 = 10,
    removal3 = 30,
    removal4 = 50,
    removal5 = 70,
    divine = 20,
    conversion = 10,
  }

  interface Card {
    cardType: string
    cardValue: number
    character: string
  }

  return (
    <div className="container mx-auto p-4">
      <section className="flex flex-row justify-center gap-4">
        <h1>Chaos Zero Nightmare Deck Calculator</h1>
      </section>
    </div>
  )
}
