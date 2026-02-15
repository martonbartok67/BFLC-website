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
        content:
          "Ezen a héten Bogyó Sándor jön hozzánk, az  OTP Junior Piacralépők verseny nyertese. A Wordy nevű nyelvtanuló-appjáról fog mesélni (ami már megelőzte a Duolingót is!). Megosztja velünk hogy hogyan épített fel a nulláról egy nemzetközi vállalkozást, milyen nehézségekbe futott bele és mit tanácsolna annak aki ugyanerre az útra térne.",
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
        topic: "Közgazdaságtan és tőzsde",
        content:
          "Farkas Gábor elemző mesél a közgazdaságtan alapjairól és megtudjuk, hogy hogyan lehet elemezni az elsőre érthetetlennek tűnő tőzsdei chart-okat is!",
      },
    ],
  },
  {
    module: "Téli szünet - Kellemes ünnepeket kíván a BFLC csapata!",
    sessions: [],
  },
  {
    module: "Január",
    sessions: [
      {
        date: "Január 8.",
        topic: "A Budapest Investment Club-pénzügyi tudatosság",
        content:
          "A Budapest Investment Club Financial Literacy részlege érkezik hozzánk egy előadással, akiknek szintén szívügyük a pénzügyi oktatás.",
      },
      {
        date: "Január 15.",
        topic: "Hogyan győzz meg bárkit fél percben?",
        content:
          "Idén is megrendezésre kerül a tavaly nagy sikernek örvendő pitch workshop, ahol a sikeres pitch receptjéről hallhatunk, majd mindenki ki is próbálhatja magát.",
      },
      {
        date: "Január 22.",
        topic: "Vállalati pénzügyek a Richter Gedeonnal",
        content:
          "Kovács László András a Richter Gedeon pénzügyi igazgatója érkezik hozzánk és mesél arról, hogy egy ekkora vállalatnál a pénzügy és a stratégia hogy fűződik egymásba, továbbá életútjáról is hallhatunk majd!",
      },
    ],
  },
  {
    module: "Témanapok - szünet",
    sessions: [],
  },
  {
    module: "Február",
    sessions: [
      {
        date: "Február 5.",
        topic: "Te hogyan döntenél? - valódi pénzügyi helyzetek",
        content:
          "Egy workshop során valós pénzügyi szituációkat próbálunk megoldani személyes, kis- és nagyvállalati szinten is, azonban ezenkívül van egy izgalmas csavar is…",
      },
      {
        date: "Február 12.",
        topic: "Juhász István & Pogány Marcell",
        content:
          "Ezen az interaktív workshopon megtanulhatod, hogyan lehet AI segítségével, programozói tudás nélkül applikációkat és weboldalakat létrehozni. Lépésről lépésre végigmegyünk azon, hogyan valósíthatod meg az ötleteidet a Google AI eszközeivel! Az alkalmat Juhász István, a 49x AI alapítója, Forbes 30 under 30-as vállalkozó vezeti, Pogány Marcell elballagott Eötvös-diákkal közösen. A foglalkozás során nemcsak tanulsz, hanem kérdezhetsz is – startupokról, vállalkozásról és az AI jövőjéről.",
      },
      {
        date: "Február 19.",
        topic: "Miért (ne) vegyél hitelre burritót?",
        content:
          "Hogyan lehet hitelre burritót venni Amerikában? Megtudhatunk többet a Buy Now Pay Later szolgáltatások működéséről, előnyeiről és hibáiról, illetve kockázatairól egy interaktív előadás keretein belül.",
      },
    ],
  },
  {
    module: "Síszünet",
    sessions: [],
  },
  {
    module: "Március",
    sessions: [
      {
        date: "Március 5.",
        topic: "AmCham céglátogatás",
        content:
          "Ellátogatunk az AmCham Hungary, az amerikai-magyar kereskedelmi kamara irodájába, ahol megismerkedhetünk a professzionális üzleti advocacy és nemzetközi kereskedelmi szektorral, valamint a magyarországi vállalati érdekek képviseletének gyakorlatával. Az AmCham több mint 300 tagvállalat (23 országból) érdekeit képviselve, politikai függetlenségük mellett Magyarország versenyképességét támogatják lobbying, networking és tudásmegosztás révén.",
      },
      {
        date: "Március 12.",
        topic: "HOLD céglátogatás",
        content:
          "Ellátogatunk a HOLD Alapkezelő irodájába, ahol bepillantást nyerhetünk a professzionális vagyonkezelés világába. Megismerkedhetünk a befektetési alapok működésével, a portfóliókezelés rejtelmeivel és a pénzügyi piacok elemzésének gyakorlatával az egyik legmeghatározóbb magyar alapkezelő szakembereinek vezetésével.",
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
