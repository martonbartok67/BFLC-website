export interface Session {
  date: string
  topic: string
  content: string
  notes?: string
}

export interface ScheduleModule {
  module: string
  sessions: Session[]
}

export const schedule: ScheduleModule[] = [
  {
    module: "Évkezdés",
    sessions: [
      {
        date: "október 3.",
        topic: "FLC x Milestone Business Society",
        content: "Bemutatkozás, rövid közös beszélgetés",
      },
      {
        date: "október 9.",
        topic: "Bemutatkozó",
        content: "Bemutatkozás, befektetések tier-list workshop",
      },
      {
        date: "október 16.",
        topic: "„Miért keres pénzt abból a Coca‑Cola, hogy ráírja a neved a palackra? — Legjobb marketing kampányok és azok pszichológiája",
        content: "A legikonikusabb marketing kampányok milyen egyszerű pszichológiai trükkökre épülnek fel, és akár hogyan tudjuk ezt mi is saját hasznunkra fordítani?",
      },
    ],
  },
  {
    module: "Őszi szünet",
    sessions: [],
  },
  {
    module: "Startup hónap",
    sessions: [
      {
        date: "november 6.",
        topic: "Mi a startup?",
        content: "Egy előadás során felfedezzük mit is takar a manapság sokat hallott startup kifejezés",
      },
      {
        date: "november 13.",
        topic: "Milyen egy startup életútja?",
        content: "Szakértő vendégünk Golovics Milán mesél arról, hogy honnan indulnak és hova érkeznek meg a sikeres startupok.",
      },
      {
        date: "november 20.",
        topic: "Session",
        content: "Hamarosan!",
      },
      {
        date: "november 27.",
        topic: "Session",
        content: "Hamarosan!",
      },
    ],
  },
  {
    module: "Közgazdaságtan hónap",
    sessions: [
      {
        date: "december 4.",
        topic: "Közgazdaságtan fogalma",
        content: "Mi is a közgazdaságtan és mivel foglalkozik?",
      },
      {
        date: "december 11.",
        topic: "Session",
        content: "Hamarosan!",
      },
      {
        date: "december 18.",
        topic: "Session",
        content: "Hamarosan!",
      },
    ],
  },
  {
    module: "Téli szünet",
    sessions: [],
  },
]

// Helper function to parse Hungarian date format and get next upcoming events
export function getUpcomingEvents(count = 2) {
  const currentYear = new Date().getFullYear()
  const allSessions: (Session & { fullDate: Date })[] = []

  // Flatten all sessions with parsed dates
  schedule.forEach((module) => {
    module.sessions.forEach((session) => {
      const dateMatch = session.date.match(/(\w+)\s+(\d+)\./)
      if (dateMatch) {
        const [, month, day] = dateMatch
        const monthMap: { [key: string]: number } = {
          január: 0,
          február: 1,
          március: 2,
          április: 3,
          május: 4,
          június: 5,
          július: 6,
          augusztus: 7,
          szeptember: 8,
          október: 9,
          november: 10,
          december: 11,
        }
        const monthIndex = monthMap[month.toLowerCase()]
        if (monthIndex !== undefined) {
          const fullDate = new Date(currentYear, monthIndex, Number.parseInt(day))
          allSessions.push({ ...session, fullDate })
        }
      }
    })
  })

  // Sort by date and filter future events
  const now = new Date()
  const upcomingSessions = allSessions
    .filter((session) => session.fullDate >= now)
    .sort((a, b) => a.fullDate.getTime() - b.fullDate.getTime())
    .slice(0, count)

  return upcomingSessions
}
