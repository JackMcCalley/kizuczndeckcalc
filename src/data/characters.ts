import { createServerFn } from '@tanstack/react-start'

export const getCharacters = createServerFn({
  method: 'GET',
}).handler(async () => [
  {
    id: 1,
    name: 'Amir',
    attribute: 'Order',
    rarity: 4,
    image: { src: '../../Assets/Amir/amir_card.webp' },
    job: 'Vanguard'
  },
  {
    id: 2,
    name: 'Beryl',
    attribute: 'Justice',
    rarity: 4,
    image: { src: '../../Assets/Beryl/beryl_card.webp' },
    job: 'Ranger'
  },
  {
    id: 3,
    name: 'Cassius',
    attribute: 'Instinct',
    rarity: 4,
    image: { src: '../../Assets/Cassius/cassius_card.webp' },
    job: 'Controller'
  },
  {
    id: 4,
    name: 'Chizuru',
    attribute: '',
    rarity: 5,
    image: { src: '../../Assets/Chizuru/chi_card.webp' },
    job: '',
  },
  {
    id: 5,
    name: 'Haru',
    attribute: 'Justice',
    rarity: 5,
    image: { src: '../../Assets/Haru/haru_card.webp' },
    job: 'Striker'
  },
  {
    id: 6,
    name: 'Hugo',
    attribute: 'Order',
    rarity: 5,
    image: { src: '../../Assets/Hugo/hugo_card.webp' },
    job: 'Ranger'
  },
  {
    id: 7,
    name: 'Kayron',
    attribute: 'Void',
    rarity: 5,
    image: { src: '../../Assets/Kayron/kayron_card.webp' },
    job: 'Psionic'
  },
  {
    id: 8,
    name: 'Khalipe',
    attribute: 'Instinct',
    rarity: 5,
    image: { src: '../../Assets/Khalipe/khalipe_card.webp' },
    job: 'Vanguard'
  },
  {
    id: 9,
    name: 'Lucas',
    attribute: 'Passion',
    rarity: 4,
    image: { src: '../../Assets/Lucas/lucas_card.webp' },
    job: 'Hunter'
  },
  {
    id: 10,
    name: 'Luke',
    attribute: 'Order',
    rarity: 5,
    image: { src: '../../Assets/Luke/luke_card.webp' },
    job: 'Hunter'
  },
  {
    id: 11,
    name: 'Magna',
    attribute: 'Justice',
    rarity: 5,
    image: { src: '../../Assets/Magna/magna_card.webp' },
    job: 'Vanguard'
  },
  {
    id: 12,
    name: 'Maribell',
    attribute: 'Passion',
    rarity: 4,
    image: { src: '../../Assets/Maribell/maribell_card.webp' },
    job: 'Vanguard'
  },
  {
    id: 13,
    name: 'Mei Lin',
    attribute: 'Passion',
    rarity: 5,
    image: { src: '../../Assets/MeiLin/Meilin_card.webp' },
    job: 'Striker'
  },
  {
    id: 14,
    name: 'Mika',
    attribute: 'Justice',
    rarity: 4,
    image: { src: '../../Assets/Mika/mika_card.webp' },
    job: 'Controller'
  },
  {
    id: 15,
    name: 'Nia',
    attribute: 'Instinct',
    rarity: 4,
    image: { src: '../../Assets/Nia/nia_card.webp' },
    job: 'Controller'
  },
  {
    id: 16,
    name: 'Orlea',
    attribute: 'Instinct',
    rarity: 5,
    image: { src: '../../Assets/Orlea/orlea_card.webp' },
    job: 'Controller'
  },
  {
    id: 17,
    name: 'Owen',
    attribute: 'Passion',
    rarity: 4,
    image: { src: '../../Assets/Owen/owen_card.webp' },
    job: 'Striker'
  },
  {
    id: 18,
    name: 'Rei',
    attribute: 'Void',
    rarity: 4,
    image: { src: '../../Assets/Rei/rei_card.webp' },
    job: 'Controller'
  },
  {
    id: 19,
    name: 'Renoa',
    attribute: 'Void',
    rarity: 5,
    image: { src: '../../Assets/Renoa/renoa_card.webp' },
    job: 'Hunter'
  },
  {
    id: 20,
    name: 'Rin',
    attribute: 'Void',
    rarity: 5,
    image: { src: '../../Assets/Rin/rin_card.webp' },
    job: 'Striker'
  },
  {
    id: 21,
    name: 'Selena',
    attribute: 'Passion',
    rarity: 4,
    image: { src: '../../Assets/Selena/selena_card.webp' },
    job: 'Ranger'
  },
  {
    id: 22,
    name: 'Sereniel',
    attribute: '',
    rarity: 5,
    image: { src: '../../Assets/Sereniel/sere_card.webp' },
    job: 'Controller'
  },
  {
    id: 23,
    name: 'Tressa',
    attribute: 'Void',
    rarity: 4,
    image: { src: '../../Assets/Tressa/Tressa_card.webp' },
    job: 'Psionic'
  },
  {
    id: 24,
    name: 'Veronica',
    attribute: 'Passion',
    rarity: 5,
    image: { src: '../../Assets/Veronica/veronica_card.webp' },
    job: 'Ranger'
  },
  {
    id: 25,
    name: 'Yuki',
    attribute: 'Order',
    rarity: 5,
    image: { src: '../../Assets/Yuki/yuki_card.webp' },
    job: 'Striker'
  },
])
