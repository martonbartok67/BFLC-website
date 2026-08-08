export function PageSkeleton() {
  return (
    <main className="pt-16">
      <section className="min-h-[50vh] bg-primary">
        <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="h-4 w-40 animate-pulse rounded-full bg-white/20" />
            <div className="space-y-3">
              <div className="h-12 w-full max-w-2xl animate-pulse rounded-md bg-white/20 sm:h-16" />
              <div className="h-12 w-4/5 animate-pulse rounded-md bg-white/15 sm:h-16" />
            </div>
            <div className="h-5 w-full max-w-xl animate-pulse rounded-full bg-white/15" />
            <div className="h-5 w-2/3 animate-pulse rounded-full bg-white/10" />
          </div>
        </div>
      </section>

      <section className="bg-background py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl border-t border-primary/15">
            {[0, 1, 2].map(item => (
              <div key={item} className="grid gap-5 border-b border-primary/15 py-8 lg:grid-cols-[0.75fr_1.25fr]">
                <div className="space-y-3">
                  <div className="h-8 w-3/4 animate-pulse rounded-md bg-primary/10" />
                  <div className="h-8 w-1/2 animate-pulse rounded-md bg-primary/10" />
                </div>
                <div className="space-y-3 pt-1">
                  <div className="h-4 w-full animate-pulse rounded-full bg-muted" />
                  <div className="h-4 w-11/12 animate-pulse rounded-full bg-muted" />
                  <div className="h-4 w-2/3 animate-pulse rounded-full bg-muted" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

