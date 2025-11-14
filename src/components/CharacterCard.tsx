import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { createSlug } from '../utils/slug'

import { Link } from '@tanstack/react-router'

// Define the character type
type Character = {
  id: number
  name: string
  attribute: string
  rarity: number
  job?: string
  image: {
    src: string
  }
}

type JobType =
  | 'Controller'
  | 'Hunter'
  | 'Psionic'
  | 'Ranger'
  | 'Striker'
  | 'Vanguard'

type AttributeType = 'Instinct' | 'Justice' | 'Order' | 'Passion' | 'Void'

const JOB_ICONS: Record<JobType, string> = {
  Controller: '../../Assets/icons/class_controller.webp',
  Hunter: '../../Assets/icons/class_hunter.webp',
  Psionic: '../../Assets/icons/class_psionic.webp',
  Ranger: '../../Assets/icons/class_ranger.webp',
  Striker: '../../Assets/icons/class_striker.webp',
  Vanguard: '../../Assets/icons/class_vanguard.webp',
}

const ATTRIBUTE_ICONS: Record<AttributeType, string> = {
  Instinct: '../../Assets/icons/element_instinct.webp',
  Justice: '../../Assets/icons/element_justice.webp',
  Order: '../../Assets/icons/element_order.webp',
  Passion: '../../Assets/icons/element_passion.webp',
  Void: '../../Assets/icons/element_void.webp',
}
export default function CharacterCard({ char }: { char: Character }) {
  const jobIcon = char.job ? JOB_ICONS[char.job as JobType] : ''
  const attributeIcon = char.attribute
    ? ATTRIBUTE_ICONS[char.attribute as AttributeType]
    : ''

  return (
    <Link
      to="/characters/$characterName"
      params={{ characterName: createSlug(char.name) }}
    >
      <Card className="w-auto drop-shadow-md hover:shadow-emerald-100 transition-all ">
        <CardHeader>
          {char.rarity == 5 ? (
            <img
              src={char.image.src}
              alt={char.name}
              loading="lazy"
              decoding="async"
              className="w-3xs h-full bg-linear-to-b from-violet-500 to-cyan-500 rounded-md"
            />
          ) : (
            <img
              src={char.image.src}
              alt={char.name}
              className="w-3xs h-full bg-linear-to-b from-amber-300 to-cyan-500 rounded-md"
            />
          )}

          <CardTitle>{char.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            <section className="gap-3 flex flex-col">
              <p>{char.rarity}★</p>
              {char.attribute && attributeIcon && (
                <p className="flex items-center gap-2">
                  <img
                    src={attributeIcon}
                    alt={char.attribute}
                    className="w-6 h-6"
                  />
                  {char.attribute}
                </p>
              )}
              {char.job && jobIcon && (
                <p className="flex items-center gap-2">
                  <img src={jobIcon} alt={char.job} className="w-6 h-6" />
                  {char.job}
                </p>
              )}
            </section>
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  )
}
