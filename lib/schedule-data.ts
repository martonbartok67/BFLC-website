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
        date: "Október 3.",
        topic: "FLC x Milestone Business Society",
        content: "Bemutatkozás, rövid közös beszélgetés",
      },
      {
        date: "Október 9.",
        topic: "Bemutatkozó",
        content: "Bemutatkozás, befektetések tier-list workshop",
      },
      {
        date: "Október 16.",
        topic:
          "„Miért keres pénzt abból a Coca‑Cola, hogy ráírja a neved a palackra? — Legjobb marketing kampányok és azok pszichológiája",
        content:
          "A legikonikusabb marketing kampányok milyen egyszerű pszichológiai trükkökre épülnek fel, és akár hogyan tudjuk ezt mi is saját hasznunkra fordítani?",
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
        date: "November 6.",
        topic: "Hogyan építs sikeres startupot? 1. rész",
        content: "Egy előadás során felfedezzük mit is takar a manapság sokat hallott startup kifejezés",
      },
      {
        date: "November 13.",
        topic: "Hogyan alakítsd az ötleted startuppá?",
        content:
          "Szakértő vendégünk Golovics Milán mesél arról, hogy hogyan lehet ma egy ötlettől egy startup-ig eljutni, és mik ennek az első lépései.",
      },
      {
        date: "November 20.",
        topic: "Hogyan építs sikeres startupot? 2. rész",
        content: "Megtudunk többet a sikeres startup receptjéről.",
      },
      {
        date: "November 27.",
        topic: "Hogyan lesz egy ötletből valóság? – Bogyó Sanyi és a Wordy története",
        content: "Az OTP Junior Piacralépők program szereplője, a Wordy nevű nyelvtanuló appon dolgozó Bogyó Sanyi látogat el hozzánk.",
      },
    ],
  },
  {
    module: "Közgazdaságtan hónap",
    sessions: [
      {
        date: "December 4.",
        topic: "Mit tanultunk a startup month alatt?",
        content: "Egy izgalmas workshoppal összefoglaljuk mindazt, amit a startup month során átvettünk",
      },
      {
        date: "December 11.",
        topic: "Interaktív Előadás",
        content: "Tőzsdei chart elemzés",
        notes: "Farkas Gábor",
      },
      {
        date: "December 18.",
        topic: "Session",
        content: "Ismerkedő karácsony előtti session",
      },
    ],
  },
  {
    module: "Téli szünet",
    sessions: [],
  },
  {
    module: "Január",
    sessions: [
      {
        date: "Január 8.",
        topic: "Előadás",
        content: "Hamarosan!",
      },
      {
        date: "Január 15.",
        topic: "Session",
        content: "Hamarosan!",
      },
      {
        date: "Január 22.",
        topic: "Beszélgetés",
        content: "Hamarosan!",
        notes: "Kovács László András",
      },
    ],
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
